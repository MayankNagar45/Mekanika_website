import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import ScrollVelocityImageGrid from "./ScrollVelocityImageGrid.tsx"

const HomeGallery = () => {
  useEffect(() => {
    const preventZoom = (event: any) => {
      if (event instanceof WheelEvent && event.ctrlKey) {
        event.preventDefault()
      }
    }

    document.addEventListener("wheel", preventZoom, { passive: false })
    return () => document.removeEventListener("wheel", preventZoom)
  }, [])

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Helmet>

      <div className="relative min-h-screen w-full bg-gray-950 py-24 text-white overflow-hidden">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-yellow-400 mb-4">
          Farewell 2025
        </h1>

        {/* Officiating Members */}
        <div className="mb-12 text-center px-4">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            Officiating Members
          </p>

          {/* First line */}
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Sarthak Modanwal · Aman Kumar · Surjya Sankar Roy · Monisha ·
            Yasaswini · Jeevan Kumar
          </p>

          {/* Second line */}
          <p className="mt-3 text-sm md:text-base text-gray-400">
            <span className="uppercase tracking-wider text-gray-500 mr-2">
              Secretaries:
            </span>
            Vinay Agrahari · Mayank Nagar · Krishna Ashrai ·
            Hardik Mahawar · Atharv Salodkar · Pavan Pahune · Sai Abhaya ·
            Mauryavardhan  · Divyanshu 
          </p>
        </div>

        {/* Image Grid */}
        <ScrollVelocityImageGrid />
      </div>
    </>
  )
}

export default HomeGallery
