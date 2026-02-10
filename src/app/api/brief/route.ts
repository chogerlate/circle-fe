import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { briefs } from '@/lib/schema'
import { eq, and } from 'drizzle-orm'

export async function GET(req: Request) {
    try {
        const userId = req.headers.get('user-id')

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Fetch user's personalized brief
        const today = new Date().toISOString().split('T')[0]

        const result = await db.select().from(briefs).where(
            and(
                eq(briefs.userId, userId),
                eq(briefs.date, today)
            )
        ).limit(1)

        const briefData = result[0]

        return NextResponse.json(briefData || { circle: [], world: [], topics: [] })
    } catch (error) {
        console.error("Fetch brief error:", error)
        return NextResponse.json({ error: 'Failed to fetch brief' }, { status: 500 })
    }
}
