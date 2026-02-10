'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { User, Lock, ArrowRight, BookOpen } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      setError(signInError.message)
      setLoading(false)
    } else {
      router.push('/brief')
      router.refresh()
    }
  }

  const handleSignUp = async () => {
    setLoading(true)
    setError(null)

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })

    if (signUpError) {
      setError(signUpError.message)
    } else {
      setError('Check your email for the confirmation link.')
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen bg-[#09090B] items-center justify-center p-6 sm:p-12 overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-5xl grid lg:grid-cols-2 bg-zinc-900/40 border border-zinc-800/50 rounded-[40px] overflow-hidden backdrop-blur-2xl shadow-[0_32px_128px_-16px_rgba(0,0,0,0.7)] relative z-10"
      >
        {/* Left Side - Form */}
        <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16 relative z-10">
          <div className="w-full max-w-sm mx-auto">
            <div className="mb-12">
              <a href="/" className="flex items-center gap-2 mb-10 group inline-flex">
                  <BookOpen className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold text-xl tracking-tight">Circle</span>
              </a>
              <h2 className="text-4xl font-medium tracking-tight text-white mb-2">
                Sign In
              </h2>
              <p className="text-zinc-500 text-sm">Welcome back. Get your daily briefing.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <User className="h-4 w-4 text-zinc-500" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-2xl border-zinc-800/50 bg-black/20 py-6 pl-12 text-white placeholder-zinc-700 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 sm:text-sm transition-all backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label htmlFor="password" className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">
                    Password
                  </label>
                  <a href="#" className="text-[10px] font-bold text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Lock className="h-4 w-4 text-zinc-500" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-2xl border-zinc-800/50 bg-black/20 py-6 pl-12 text-white placeholder-zinc-700 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 sm:text-sm transition-all backdrop-blur-sm"
                  />
                </div>
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-red-400 text-xs text-center bg-red-400/10 py-3 rounded-xl border border-red-400/20"
                >
                  {error}
                </motion.div>
              )}

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex w-full justify-center rounded-2xl bg-indigo-600 py-7 text-sm font-bold text-white shadow-xl shadow-indigo-500/20 hover:bg-indigo-500 transition-all uppercase tracking-widest"
                >
                  {loading ? 'Authenticating...' : 'Sign In'}
                </Button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-xs text-zinc-500">
                  New to Circle?{' '}
                  <button
                    type="button"
                    onClick={handleSignUp}
                    className="font-bold text-zinc-300 hover:text-white transition-colors"
                  >
                    Create account
                  </button>
                </p>
              </div>
            </form>
          </div>
          
          <div className="mt-12 text-center lg:text-left">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
              © 2026 Circle Technology Inc.
            </p>
          </div>
        </div>

        {/* Right Side - Visual Panel */}
        <div className="relative hidden lg:flex flex-col justify-end p-12 overflow-hidden border-l border-white/5 bg-zinc-950">
          {/* Background Image with Cinematic Shading */}
          <div className="absolute inset-0 z-0">
            <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
               alt="Digital Space" 
               className="w-full h-full object-cover scale-110"
            />
            {/* Multi-layered shading for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-zinc-900/40 to-indigo-900/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay" />
          </div>
          
          {/* Content Overlay - Positioned Bottom */}
          <div className="relative z-10 w-full">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-400/20">
                  <BookOpen className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Circle Intelligence</h3>
                  <p className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">Version 2.0.4 • 2026</p>
                </div>
              </div>
              
              <div className="space-y-3">
                  <h4 className="text-2xl font-medium text-white leading-tight tracking-tight">
                    "The anti-feed architecture designed for <span className="text-indigo-400 italic">total clarity</span>."
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                    Experience your morning in a single, curated screen. No noise. No infinite scroll. Just the information you need.
                  </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/5">
                <div className="flex gap-1.5">
                    <div className="h-1 w-6 bg-indigo-500 rounded-full"></div>
                    <div className="h-1 w-1 bg-white/20 rounded-full"></div>
                    <div className="h-1 w-1 bg-white/20 rounded-full"></div>
                </div>
                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">
                  Encrypted Session
                </div>
              </div>
            </motion.div>

            {/* Floating Detail */}
            <div className="absolute -top-20 -right-4 pointer-events-none opacity-50">
              <div className="px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-[9px] text-zinc-400 uppercase tracking-widest font-bold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                System Balanced
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
