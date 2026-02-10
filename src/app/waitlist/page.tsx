"use client"

import React, { useState } from "react"
import { Navbar } from "@/components/navbar"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitted(true)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#09090B]">
      <Navbar />

      {/* Main Content */}
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-white mb-6 leading-tight tracking-tight">
                Your morning in one screen
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Join the waitlist for ClearFeed. Get 9 carefully curated facts each morning. No opinions, no noise, just
                clarity.
              </p>

              {/* Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 py-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <p className="text-sm text-zinc-300">9 facts daily</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <p className="text-sm text-zinc-300">Under 5 minutes</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <p className="text-sm text-zinc-300">No engagement bait</p>
                </div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg border border-zinc-700 font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                  >
                    {isLoading ? "Joining..." : "Join waitlist"}
                    {!isLoading && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-zinc-500">We'll email you when we launch. No spam, ever.</p>
              </form>

              {/* Feature Grid */}
              <div className="mt-16 pt-12 border-t border-zinc-800">
                <h3 className="text-sm font-medium text-zinc-400 mb-8">What you'll get</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-left">
                    <h4 className="text-white font-medium mb-2">Fact-based reporting</h4>
                    <p className="text-sm text-zinc-500">
                      No opinions, no viral outrage. Just the facts you need to know.
                    </p>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-medium mb-2">One morning notification</h4>
                    <p className="text-sm text-zinc-500">Get one notification per day. You decide when to read.</p>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-medium mb-2">Personalized topics</h4>
                    <p className="text-sm text-zinc-500">Select the news categories that matter to you most.</p>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-medium mb-2">Location-aware news</h4>
                    <p className="text-sm text-zinc-500">Get stories relevant to where you live and care about.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Success State */}
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-medium text-white mb-4">You're on the list</h2>
              <p className="text-lg text-zinc-400 mb-8 max-w-md mx-auto">
                Thanks for joining the waitlist. We'll send you an email when ClearFeed launches.
              </p>

              <button
                onClick={() => (window.location.href = "/")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg border border-zinc-700 font-medium transition-colors"
              >
                Back to home
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}
