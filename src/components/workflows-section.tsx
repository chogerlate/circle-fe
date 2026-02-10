"use client"

import { motion } from "framer-motion"
import { ChevronRight, Globe, Filter, Sparkles, Send } from "lucide-react"

export function WorkflowsSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-indigo-500" />
          <span className="text-zinc-400 text-sm">The Synthesis Loop</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Section heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          From chaos to clarity
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Information, refined.</span> Our automated pipeline monitors global signals, strips the noise, and delivers your briefing as the sun rises.
        </p>

        {/* Workflow visualization */}
        <div className="relative w-full aspect-[16/9] bg-zinc-900/30 rounded-xl border border-zinc-800/50 overflow-hidden mb-16 shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-3xl">
              {/* Nodes */}
              <div className="flex justify-between items-center relative z-10 px-12">
                {/* Node 1: Connections */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 w-48 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <Globe className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-zinc-200 text-sm font-semibold">Connections</div>
                      <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Social & News</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[8px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">X.COM</span>
                    <span className="text-[8px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">WSJ</span>
                    <span className="text-[8px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">FINANCE</span>
                  </div>
                </motion.div>

                {/* Connection line 1 */}
                <div className="flex-1 flex justify-center">
                    <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "60px", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-px bg-zinc-800"
                    />
                </div>

                {/* Node 2: Synthesize */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-zinc-900 border border-zinc-700/50 rounded-2xl p-4 w-48 shadow-xl scale-110 relative z-20"
                >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full px-2">
                        Synthesizing
                    </div>
                  <div className="flex items-center gap-3 mb-3 mt-1">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                      <Filter className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <div className="text-zinc-200 text-sm font-semibold">Distillation</div>
                      <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Personalized</div>
                    </div>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "88%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-indigo-500" 
                    />
                  </div>
                </motion.div>

                {/* Connection line 2 */}
                <div className="flex-1 flex justify-center">
                    <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "60px", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="h-px bg-zinc-800"
                    />
                </div>

                {/* Node 3: One Page */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 w-48 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <Send className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-zinc-200 text-sm font-semibold">One Page</div>
                      <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Hard Stop</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" />
                    Finish Line
                  </div>
                </motion.div>
              </div>

              {/* Connecting dashed lines background */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" style={{ zIndex: 0 }}>
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Feature summary row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-24">
            <div className="space-y-4">
                <div className="text-white font-semibold">Everything Integrated</div>
                <p className="text-zinc-500 text-sm leading-relaxed">We connect to your Social circles, News preferences, and Market watchlists to build your singular view.</p>
            </div>
            <div className="space-y-4 border-l border-zinc-800/50 pl-8">
                <div className="text-white font-semibold">AI Synthesis</div>
                <p className="text-zinc-500 text-sm leading-relaxed">Not just a list of links. We summarize the sentiment, extract the facts, and group related stories.</p>
            </div>
            <div className="space-y-4 border-l border-zinc-800/50 pl-8">
                <div className="text-white font-semibold">The Hard Stop</div>
                <p className="text-zinc-500 text-sm leading-relaxed">Once you reach the bottom, there's nothing else to see. Go live your life.</p>
            </div>
        </div>
      </div>
    </section>
  )
}
