"use client"

import { motion } from "framer-motion"

const featureCards = [
  {
    title: "Personalized Synthesis",
    description: "Your Friends, News, and Markets cross-synthesized into a single morning brief.",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=800",
    number: "01"
  },
  {
    title: "The World in One Screen",
    description: "No tabs, no feeds, no scrolling. Everything that matters to you, in one glance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    number: "02"
  },
  {
    title: "The Hard Stop",
    description: "Read your brief, get the signal, and close. We add a finish line to your morning.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800",
    number: "03"
  },
]

export function FeatureCardsSection() {
  return (
    <div className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-7xl">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-24 pr-12">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Philosophy</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] tracking-tight"
              >
                Engineered for <span className="text-zinc-600 italic">focus</span>, not engagement.
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-sm"
            >
              <p className="text-zinc-500 leading-relaxed text-sm">
                We've built a wall between you and the attention economy. Circle is the anti-feed designed to help you reclaim your morning ritual.
              </p>
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-zinc-800/50 bg-zinc-900 shadow-2xl transition-all duration-500 group-hover:border-indigo-500/50">
                  {/* Background Image */}
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 blur-[2px] group-hover:blur-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <span className="text-indigo-400 font-mono text-sm mb-4 block group-hover:translate-x-1 transition-transform">{card.number} /</span>
                    <h3 className="text-white font-medium text-2xl leading-tight mb-4">{card.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                        {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
