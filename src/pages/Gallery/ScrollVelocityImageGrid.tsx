"use client"

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../../components/magicui/scroll-based-velocity.tsx"

// ---------------- image import ----------------
// @ts-ignore
const importAllImages = (ctx: __WebpackModuleApi.RequireContext) =>
  ctx.keys().map((k) => ({
    id: k,
    url: ctx(k).default || ctx(k),
  }))

const images = importAllImages(
  // @ts-ignore
  (require as __WebpackModuleApi.RequireFunction).context(
    "../../components/event_Images",
    false,
    /\.(png|jpe?g|svg)$/
  )
)

// ---------------- helpers ----------------
const makePairs = (imgs: typeof images, pairs = 3) => {
  const perPair = Math.ceil(imgs.length / pairs)
  return Array.from({ length: pairs }).map((_, i) =>
    imgs.slice(i * perPair, (i + 1) * perPair)
  )
}

const PAIRS = makePairs(images, 3)

// ---------------- component ----------------
export default function ScrollVelocityImageGrid() {
  return (
    <div className="relative w-full overflow-hidden py-16">
      <ScrollVelocityContainer>

        {/* PAIR 1 */}
        <ScrollVelocityRow baseVelocity={3} direction={1} className="py-8">
          <ImagePairGrid images={PAIRS[0]} />
        </ScrollVelocityRow>

        {/* PAIR 2 */}
        <ScrollVelocityRow baseVelocity={4} direction={-1} className="py-8">
          <ImagePairGrid images={PAIRS[1]} />
        </ScrollVelocityRow>

        {/* PAIR 3 */}
        <ScrollVelocityRow baseVelocity={2.5} direction={1} className="py-8">
          <ImagePairGrid images={PAIRS[2]} />
        </ScrollVelocityRow>

      </ScrollVelocityContainer>
    </div>
  )
}

// ---------------- grid per pair ----------------
function ImagePairGrid({ images }: { images: any[] }) {
  const mid = Math.ceil(images.length / 2)
  const topRow = images.slice(0, mid)
  const bottomRow = images.slice(mid)

  return (
    <div
      className="
        grid grid-rows-2
        gap-y-2           
        px-6
      "
    >
      {/* Top row */}
      <div className="flex gap-x-6">
        {topRow.map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt="Gallery"
            loading="lazy"
            className="
              w-[220px] md:w-[260px]
              h-auto object-contain
              rounded-md
              transition-transform duration-300
              hover:scale-[1.04]
            "
          />
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex gap-x-6">
        {bottomRow.map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt="Gallery"
            loading="lazy"
            className="
              w-[220px] md:w-[260px]
              h-auto object-contain
              rounded-md
              transition-transform duration-300
              hover:scale-[1.04]
            "
          />
        ))}
      </div>
    </div>
  )
}

