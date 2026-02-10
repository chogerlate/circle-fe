"use client"

import type React from "react"
import { motion, Variants } from "framer-motion"
import {
  Globe,
  Users,
  LineChart,
  BookOpen,
  Sparkles,
  Search,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from "lucide-react"

export function DashboardMockup() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      className="w-full h-full bg-[#09090B] flex flex-col overflow-hidden border border-zinc-800/50 rounded-2xl shadow-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top Bar */}
      <div className="px-8 py-6 border-b border-zinc-900 flex justify-between items-center bg-zinc-900/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
        </div>
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                <Clock className="w-3 h-3" />
                Next Brief: 06:00 AM
            </div>
            <div className="h-4 w-px bg-zinc-800" />
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                    <Users className="w-3 h-3 text-indigo-400" />
                </div>
            </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="p-12 pb-6">
         <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-bold uppercase tracking-widest">
                <Sparkles className="w-3 h-3" />
                Featured Intelligence
            </div>
            <h1 className="text-4xl text-white font-medium tracking-tighter leading-tight max-w-2xl">
                Global market resilience <span className="text-zinc-500">vs.</span> Centralized compute shifts.
            </h1>
         </motion.div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 px-12 py-6 grid grid-cols-12 gap-12 overflow-hidden">
        
        {/* News Column */}
        <div className="col-span-8 space-y-12">
            <motion.div variants={itemVariants} className="space-y-6">
                 <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                    <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                        <Globe className="w-3 h-3" />
                        Signal Extraction
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3 p-4 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
                        <div className="w-full aspect-video bg-zinc-800 rounded-lg overflow-hidden relative">
                             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
                             <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-zinc-900 rounded text-[8px] text-zinc-400 font-bold uppercase tracking-widest">Economics</div>
                        </div>
                        <h4 className="text-white text-sm font-medium leading-snug">Rate cuts expected as inflation stabilizes in EU.</h4>
                        <div className="flex items-center gap-2 text-[9px] text-zinc-600 font-bold">
                            REUTERS • 4M AGO
                        </div>
                    </div>
                    <div className="space-y-3 p-4 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
                        <div className="w-full aspect-video bg-zinc-800 rounded-lg overflow-hidden relative">
                             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
                             <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-zinc-900 rounded text-[8px] text-zinc-400 font-bold uppercase tracking-widest">Tech</div>
                        </div>
                        <h4 className="text-white text-sm font-medium leading-snug">New open-weights model outperforms GPT-4 in logic.</h4>
                        <div className="flex items-center gap-2 text-[9px] text-zinc-600 font-bold">
                            WIRE • 12M AGO
                        </div>
                    </div>
                 </div>
            </motion.div>

            {/* Social Synthesis */}
            <motion.div variants={itemVariants} className="space-y-6">
                 <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                    <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                        <Users className="w-3 h-3" />
                        Your Circles
                    </div>
                 </div>
                 <div className="p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
                    <p className="text-white text-md italic leading-relaxed">
                        "Synthesis: Your friends are increasingly discussing the impact of 
                        <span className="text-indigo-400 font-medium"> decentralized cloud </span> 
                        and questioning local platform longevity."
                    </p>
                    <div className="mt-4 flex -space-x-2">
                         {[...Array(4)].map((_, i) => (
                             <div key={i} className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-950 shadow-sm" />
                         ))}
                         <div className="px-3 text-[9px] text-zinc-600 font-bold uppercase tracking-widest flex items-center">
                            +12 others from X and LinkedIn
                         </div>
                    </div>
                 </div>
            </motion.div>
        </div>

        {/* Sidebar Column */}
        <div className="col-span-4 space-y-12">
             <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                    <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                        <LineChart className="w-3 h-3" />
                        Market Pulse
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center bg-zinc-900/20 p-4 rounded-xl border border-zinc-800/30">
                        <div>
                            <div className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">NVDA</div>
                            <div className="text-white font-bold text-lg leading-none mt-1">$1,024.12</div>
                        </div>
                        <div className="text-emerald-500 text-[10px] font-bold flex items-center gap-1 group">
                             <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                             +4.2%
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-900/20 p-4 rounded-xl border border-zinc-800/30">
                        <div>
                            <div className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">BTC</div>
                            <div className="text-white font-bold text-lg leading-none mt-1">$68,443</div>
                        </div>
                        <div className="text-rose-500 text-[10px] font-bold flex items-center gap-1">
                             <ArrowUpRight className="w-3 h-3 rotate-90" />
                             -1.8%
                        </div>
                    </div>
                 </div>
             </motion.div>

             {/* Finish Line Indicator */}
             <motion.div variants={itemVariants} className="pt-24 opacity-50">
                 <div className="flex flex-col items-center gap-3">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
                    <div className="flex items-center gap-2 text-[10px] text-zinc-600 font-bold uppercase tracking-[0.4em]">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        Hard Stop
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
                 </div>
             </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
