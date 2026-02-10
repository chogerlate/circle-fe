import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { preRegistrations } from '@/lib/schema'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, city, interests, people } = body

        // Simulate saving to database for mock-only version
        console.log("Mock Registration:", { email, city, interests, people });

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Registration error:", error)
        return NextResponse.json({ error: 'Failed to register' }, { status: 500 })
    }
}
