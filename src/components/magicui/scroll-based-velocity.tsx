import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion"
import type { MotionValue } from "framer-motion"

import { cn } from "../utils/utils.tsx";

interface ScrollVelocityRowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  baseVelocity?: number
  direction?: 1 | -1
}

/* ---------------- utils ---------------- */

export const wrap = (min: number, max: number, v: number) => {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

/* ---------------- context ---------------- */

const ScrollVelocityContext =
  React.createContext<MotionValue<number> | null>(null)

/* ---------------- container ---------------- */

export function ScrollVelocityContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  const velocityFactor = useTransform(smoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1
    const magnitude = Math.min(5, (Math.abs(v) / 1000) * 5)
    return sign * magnitude
  })

  return (
    <ScrollVelocityContext.Provider value={velocityFactor}>
      <div className={cn("relative w-full", className)} {...props}>
        {children}
      </div>
    </ScrollVelocityContext.Provider>
  )
}

/* ---------------- public row ---------------- */

export function ScrollVelocityRow(props: ScrollVelocityRowProps) {
  const sharedVelocity = useContext(ScrollVelocityContext)
  if (sharedVelocity) {
    return (
      <ScrollVelocityRowImpl
        {...props}
        velocityFactor={sharedVelocity}
      />
    )
  }
  return <ScrollVelocityRowLocal {...props} />
}

/* ---------------- core impl ---------------- */

function ScrollVelocityRowImpl({
  children,
  baseVelocity = 5,
  direction = 1,
  className,
  velocityFactor,
  ...props
}: ScrollVelocityRowProps & {
  velocityFactor: MotionValue<number>
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const blockRef = useRef<HTMLDivElement>(null)
  const [copies, setCopies] = useState(3)

  const baseX = useMotionValue(0)
  const unitWidth = useMotionValue(0)

  const baseDir = useRef(direction >= 0 ? 1 : -1)
  const currentDir = useRef(baseDir.current)

  /* measure width */
  useEffect(() => {
    const container = containerRef.current
    const block = blockRef.current
    if (!container || !block) return

    const measure = () => {
      const cw = container.offsetWidth
      const bw = block.scrollWidth
      unitWidth.set(bw)
      setCopies(Math.max(3, Math.ceil(cw / bw) + 2))
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(container)
    ro.observe(block)

    return () => ro.disconnect()
  }, [children, unitWidth])

  /* wrap motion */
  const x = useTransform([baseX, unitWidth], ([v, w]) => {
    if (!w) return "0px"
    return `${-wrap(0, w, v)}px`
  })

  /* animation loop */
  useAnimationFrame((_, delta) => {
    const dt = delta / 1000
    const vf = velocityFactor.get()
    const abs = Math.min(5, Math.abs(vf))

    if (abs > 0.1) {
      currentDir.current = baseDir.current * (vf >= 0 ? 1 : -1)
    }

    const w = unitWidth.get()
    if (!w) return

    const pxPerSec = (w * baseVelocity) / 100
    baseX.set(
      baseX.get() +
        currentDir.current * pxPerSec * (1 + abs) * dt
    )
  })

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full overflow-hidden whitespace-nowrap",
        className
      )}
      {...props}
    >
      <motion.div
        className="inline-flex will-change-transform items-center"
        style={{ x }}
      >
        {Array.from({ length: copies }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? blockRef : null}
            aria-hidden={i !== 0}
            className="inline-flex shrink-0 items-center"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

/* ---------------- fallback ---------------- */

function ScrollVelocityRowLocal(props: ScrollVelocityRowProps) {
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smooth = useSpring(velocity, {
    damping: 50,
    stiffness: 400,
  })
  const factor = useTransform(smooth, (v) => {
    const sign = v < 0 ? -1 : 1
    return sign * Math.min(5, (Math.abs(v) / 1000) * 5)
  })
  return (
    <ScrollVelocityRowImpl
      {...props}
      velocityFactor={factor}
    />
  )
}
