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
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
        <p className="text-gray-600">Your first brief arrives tomorrow.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow space-y-6">
      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      
      <Input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({...formData, city: e.target.value})}
        required
      />

      <div>
        <label className="block text-sm font-medium mb-2">3 Interests</label>
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
            className="mb-2"
            required
          />
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">5 People to Follow</label>
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
            className="mb-2"
            required
          />
        ))}
      </div>

      <Button type="submit" className="w-full">
        Join the Waitlist
      </Button>
    </form>
  )
}
