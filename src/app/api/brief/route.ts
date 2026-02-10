import { NextResponse } from 'next/server'
import { mockBrief } from '@/lib/mock-data'

export async function GET(req: Request) {
    try {
        // Return mock data for the database-less version
        return NextResponse.json(mockBrief)
    } catch (error) {
        console.error("Fetch brief error:", error)
        return NextResponse.json({ error: 'Failed to fetch brief' }, { status: 500 })
    }
}
