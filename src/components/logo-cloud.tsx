"use client"

import { motion } from "framer-motion"

const logos = [
  "Reuters", "Bloomberg", "AP News", "WSJ", "ft.com", "The Economist", "Nikkei", "MIT Review"
]

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-40 pt-12" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center gap-12"
          >
            <div className="flex-shrink-0">
               <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Primary Networks</p>
               <h3 className="text-zinc-200 font-medium text-xl">Sourced from the sources.</h3>
            </div>
            
            <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <div className="flex items-center gap-12 animate-infinite-scroll">
                    {logos.concat(logos).map((logo, i) => (
                        <span key={i} className="text-zinc-700 hover:text-zinc-500 transition-colors cursor-default text-2xl font-bold tracking-tighter whitespace-nowrap italic">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
