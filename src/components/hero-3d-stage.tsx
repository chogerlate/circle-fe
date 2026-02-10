"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DashboardMockup } from "./dashboard-mockup"
import { Navbar } from "./navbar"
import { LogoCloud } from "./logo-cloud"
import { FeatureCardsSection } from "./feature-cards-section"
import { CTASection } from "./cta-section"
import { Footer } from "./footer"

export function Hero3DStage() {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = Math.min(scrollY / 300, 1) * -30
      setYOffset(offset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseTransform = {
    translateX: 2,
    scale: 1.2,
    rotateX: 47,
    rotateY: 31,
    rotateZ: 324,
  }

  return (
    <section className="relative min-h-[140vh] overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      {/* Subtle glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -30%)",
          width: "1200px",
          height: "800px",
          background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 pt-28 flex flex-col">
        {/* Hero text - contained and centered */}
        <div className="w-full flex justify-center px-6 mt-16">
          <div className="w-full max-w-7xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-[100px] font-medium text-white leading-[0.9] tracking-tighter"
            >
              The Daily <span className="text-zinc-700 italic">Finish Line.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10 text-xl text-zinc-500 max-w-lg leading-relaxed"
            >
              The anti-feed for people who value their time. We synthesize your Friends, News, Markets, and Research into one page. 
              Open once. Get informed. Then get off the internet.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 flex items-center gap-6"
            >
              <a href="/login" className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-500/20 text-[10px] uppercase tracking-[0.3em]">
                Start your brief
              </a>
              <a href="/waitlist" className="px-10 py-5 border border-zinc-800 text-zinc-300 font-bold rounded-2xl hover:bg-zinc-900 transition-colors text-[10px] uppercase tracking-[0.3em]">
                Join waitlist
              </a>
            </motion.div>
          </div>
        </div>

        {/* 3D Stage - full bleed */}
        <div
          className="relative"
          style={{
            width: "100vw",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            position: "relative",
            left: "50%",
            right: "50%",
            height: "800px",
            marginTop: "20px",
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 h-[400px] z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #09090B 30%, transparent 100%)",
            }}
          />

          {/* Perspective container */}
          <div
            style={{
              transform: `translateY(${yOffset}px)`,
              transition: "transform 0.1s ease-out",
              contain: "strict",
              perspective: "4000px",
              perspectiveOrigin: "100% 0",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              position: "relative",
            }}
          >
            {/* Transformed base */}
            <motion.div
              initial={{ opacity: 0, rotateX: 60, scale: 0.8 }}
              animate={{ opacity: 1, rotateX: 47, scale: 1.2 }}
              transition={{
                delay: 0.5,
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                backgroundColor: "#09090B",
                transformOrigin: "0 0",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                width: "1600px",
                height: "900px",
                margin: "250px auto auto",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                transform: `translate(${baseTransform.translateX}%) scale(${baseTransform.scale}) rotateX(${baseTransform.rotateX}deg) rotateY(${baseTransform.rotateY}deg) rotate(${baseTransform.rotateZ}deg)`,
                transformStyle: "preserve-3d",
                overflow: "hidden",
                boxShadow: "0 100px 200px rgba(0,0,0,0.8)",
              }}
            >
              <DashboardMockup />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
