"use client"

import { BookOpen } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-[#09090B]/80 backdrop-blur-xl">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-7xl flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <span className="text-white font-bold tracking-tight text-xl">Circle</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
              Philosophy
            </a>
            <a href="#ai" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
              Curation Engine
            </a>
            <a href="#how-it-works" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
              The Synthesis
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
              Sign in
            </a>
            <a
              href="/waitlist"
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-indigo-500/20"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
