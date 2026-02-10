import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { BriefHeader } from '@/components/brief/BriefHeader'
import { MyCircle } from '@/components/brief/MyCircle'
import { MyWorld } from '@/components/brief/MyWorld'
import { MyTopics } from '@/components/brief/MyTopics'
import { EndState } from '@/components/brief/EndState'

// Define interfaces if strict typing is needed here, or import from types/index.ts if created
interface BriefData {
  circle: any[]
  world: any[]
  topics: any[]
}

export default async function BriefPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }

  // Fetch user's brief data via internal API call
  // Note: In Next.js App Router, it's often better to call DB directly in Server Component
  // instead of calling own API to avoid overhead, but I'll stick to the user's pattern
  // of calling the API, or refactor to call DB directly.
  // Calling API via fetch in server component requires absolute URL.
  // Let's call the DB directly for better performance and simplicity in Server Components.
  
  // Implementation note: The API route /api/brief logic will be moved here or called via helper.
  // Ideally, logic should be in a controller/service.
  // For now, I will fetch from the API endpoint using the full URL or invoke the logic directly.
  
  // Actually, to keep it simple and consistent with the user's request structure:
  const headers = { 'user-id': user.id }
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/brief`, {
    headers: headers,
    cache: 'no-store' 
  })
  
  let briefData: BriefData = { circle: [], world: [], topics: [] }
  
  if (res.ok) {
     briefData = await res.json()
  }

  // Extract name/email for greeting
  const userName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'there'

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <BriefHeader userName={userName} />
        <MyCircle people={briefData.circle} />
        <MyWorld news={briefData.world} />
        <MyTopics topics={briefData.topics} />
        <EndState />
      </div>
    </main>
  )
}
