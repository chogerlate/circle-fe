"use client"

import { motion } from "framer-motion"
import { ChevronRight, Check, Globe, Sparkles, MessageSquare, LineChart, BookOpen } from "lucide-react"

const engines = [
  { name: "Social Circle", isAI: true, selected: true, icon: <MessageSquare className="w-4 h-4" /> },
  { name: "Market Pulse", isAI: true, selected: false, icon: <LineChart className="w-4 h-4" /> },
  { name: "Global Signal", isAI: true, selected: false, icon: <Globe className="w-4 h-4" /> },
  { name: "Deep Research", isAI: true, selected: false, icon: <BookOpen className="w-4 h-4" /> },
]

export function AISection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24 overflow-hidden" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left: Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Personalized Curation</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tighter leading-[0.9]">
                Everything you care about. <span className="text-zinc-700 italic">One screen.</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
                We connect to your social circles, market watchlists, and news feeds. Our engines synthesize thousands of data points into a single, cohesive page. No scrolling required.
              </p>
            </div>

            {/* Engine Selectors */}
            <div className="space-y-4">
              {engines.map((engine, idx) => (
                <motion.div
                  key={engine.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    engine.selected 
                    ? "bg-indigo-500/10 border-indigo-500/50" 
                    : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                        engine.selected ? "bg-indigo-500/20 border-indigo-500/30" : "bg-zinc-800 border-zinc-700"
                    }`}>
                      <span className={engine.selected ? "text-indigo-400" : "text-zinc-500"}>{engine.icon}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{engine.name}</div>
                      <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Active Synthesis</div>
                    </div>
                  </div>
                  {engine.isAI && (
                    <div className="px-2 py-1 rounded-md bg-zinc-800 text-[8px] text-zinc-400 font-bold uppercase tracking-widest border border-zinc-700">
                      AI Optimized
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: The Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-[32px] overflow-hidden shadow-2xl"
            >
                {/* Header of Mockup */}
                <div className="bg-zinc-800/50 p-6 border-b border-zinc-800 flex items-center justify-between">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono tracking-widest">FEBRUARY 10, 2026</div>
                </div>

                {/* Content of Mockup */}
                <div className="p-8 space-y-8">
                    {/* Mock Item 1: Social */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-indigo-400">
                            <MessageSquare className="w-3 h-3" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Social Circle</span>
                        </div>
                        <h4 className="text-white font-medium text-xl leading-snug">
                            Your circle is discussing <span className="text-indigo-400">#OpenSourceAI</span> and the decline of central platforms.
                        </h4>
                        <div className="flex gap-2">
                            <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700" />
                            <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700" />
                            <div className="text-[10px] text-zinc-500 pt-1">+14 others</div>
                        </div>
                    </div>

                    <div className="h-px bg-zinc-800/50" />

                    {/* Mock Item 2: News/Markets */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-emerald-400">
                            <LineChart className="w-3 h-3" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Markets & Signal</span>
                        </div>
                        <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-4">
                            <p className="text-zinc-400 text-xs leading-relaxed">
                                <span className="text-white font-medium">Fact:</span> Global semiconductor lead times dropped by 14% this morning. Cross-referenced with Tokyo and Shenzhen data.
                            </p>
                            <div className="mt-3 flex items-center gap-4">
                                <span className="text-[10px] text-emerald-500 font-bold">↑ 0.4% CONFIDENCE</span>
                                <span className="text-[10px] text-zinc-600">8 SOURCES VERIFIED</span>
                            </div>
                        </div>
                    </div>

                    {/* Hard Stop Visual */}
                    <div className="flex items-center justify-center pt-8 opacity-40">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-zinc-800" />
                        <div className="px-4 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 whitespace-nowrap">
                            End of briefing
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-zinc-800" />
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
