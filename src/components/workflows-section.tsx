"use client"

import { motion } from "framer-motion"
import { ChevronRight, GitPullRequest, CheckCircle2, AlertCircle } from "lucide-react"

export function WorkflowsSection() {
  return (
    <section className="relative py-40 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-zinc-400 text-sm">Engineering workflows</span>
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
          Automate your workflows
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Connect your code to your issues.</span> Automatically update issue
          statuses, link PRs, and track deployments without leaving your terminal.
        </p>

        {/* Workflow visualization */}
        <div className="relative w-full aspect-[16/9] bg-zinc-900/30 rounded-xl border border-zinc-800/50 overflow-hidden mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-3xl">
              {/* Nodes */}
              <div className="flex justify-between items-center relative z-10 px-12">
                {/* Node 1: Code */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 w-48 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                      <GitPullRequest className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div>
                      <div className="text-zinc-200 text-sm font-medium">Pull Request</div>
                      <div className="text-zinc-500 text-xs">opened</div>
                    </div>
                  </div>
                  <div className="text-zinc-400 text-xs font-mono bg-zinc-950/50 p-2 rounded">
                    feat: add user auth
                  </div>
                </motion.div>

                {/* Connection line 1 */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100px", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="h-[2px] bg-zinc-700 relative"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 px-2 py-1 rounded text-[10px] text-zinc-400 border border-zinc-700">
                    triggers
                  </div>
                </motion.div>

                {/* Node 2: CI/CD */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 w-48 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-zinc-200 text-sm font-medium">Tests Passed</div>
                      <div className="text-zinc-500 text-xs">2m ago</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-full bg-green-500/50 rounded-full" />
                    <div className="h-1.5 w-full bg-green-500/50 rounded-full" />
                    <div className="h-1.5 w-full bg-green-500/50 rounded-full" />
                  </div>
                </motion.div>

                {/* Connection line 2 */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100px", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="h-[2px] bg-zinc-700 relative"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 px-2 py-1 rounded text-[10px] text-zinc-400 border border-zinc-700">
                    updates
                  </div>
                </motion.div>

                {/* Node 3: Issue */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 w-48 shadow-xl"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-zinc-200 text-sm font-medium">Issue Updated</div>
                      <div className="text-zinc-500 text-xs">ENG-123</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-zinc-500">Status:</span>
                    <span className="text-yellow-500 bg-yellow-500/10 px-1.5 py-0.5 rounded">In Progress</span>
                  </div>
                </motion.div>
              </div>

              {/* Connecting dashed lines background */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-700" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
