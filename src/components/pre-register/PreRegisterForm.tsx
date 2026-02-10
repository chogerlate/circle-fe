'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function PreRegisterForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    city: '',
    interests: ['', '', ''],
    people: ['', '', '', '', '']
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      setSubmitted(true)
      // Redirect to login instead of sign-up since we implemented login
      setTimeout(() => router.push('/login'), 2000)
    }
  }

  if (submitted) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <h3 className="text-2xl font-medium text-white mb-2">Thank you!</h3>
        <p className="text-zinc-400">Your first brief arrives tomorrow.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl shadow-2xl space-y-6 backdrop-blur-sm">
      <div className="space-y-4">
        <label className="text-sm font-medium text-zinc-400">Basic Information</label>
        <Input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-indigo-500 focus:border-indigo-500"
        />
        
        <Input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
            required
            className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-zinc-400">3 Interests</label>
        <div className="grid gap-2">
            {formData.interests.map((interest, i) => (
            <Input
                key={i}
                type="text"
                placeholder={`Interest ${i + 1}`}
                value={interest}
                onChange={(e) => {
                const newInterests = [...formData.interests]
                newInterests[i] = e.target.value
                setFormData({...formData, interests: newInterests})
                }}
                className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-indigo-500 focus:border-indigo-500"
                required
            />
            ))}
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-zinc-400">5 People to Follow</label>
        <div className="grid gap-2">
            {formData.people.map((person, i) => (
            <Input
                key={i}
                type="text"
                placeholder={`Person ${i + 1}`}
                value={person}
                onChange={(e) => {
                const newPeople = [...formData.people]
                newPeople[i] = e.target.value
                setFormData({...formData, people: newPeople})
                }}
                className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-indigo-500 focus:border-indigo-500"
                required
            />
            ))}
        </div>
      </div>

      <Button type="submit" className="w-full bg-white text-zinc-900 hover:bg-zinc-100 py-6 text-sm font-semibold rounded-lg transition-all">
        Join the Waitlist
      </Button>
    </form>
  )
}
