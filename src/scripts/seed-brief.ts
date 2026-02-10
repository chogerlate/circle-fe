
import { db } from '../lib/db';
import { briefs, profiles } from '../lib/schema';
import { mockBrief } from '../lib/mock-data';
import { eq, and } from 'drizzle-orm';

async function seed() {
    console.log('🌱 Seeding brief data...');

    try {
        // 1. Find a user to attach the brief to
        // We'll just take the first user found in profiles.
        // We select only the ID to avoid issues with schema mismatch (e.g. missing columns in DB)
        const allProfiles = await db.select({ id: profiles.id }).from(profiles).limit(1);

        if (allProfiles.length === 0) {
            console.error('❌ No profiles found in the database. Please sign up users first.');
            process.exit(1);
        }

        const userId = allProfiles[0].id;
        console.log(`👤 Found user ID: ${userId}`);

        // 2. Check if a brief already exists for this user and date
        const today = new Date().toISOString().split('T')[0];
        const existingBrief = await db.query.briefs.findFirst({
            where: and(
                eq(briefs.userId, userId),
                eq(briefs.date, today)
            )
        });

        if (existingBrief) {
            console.log(`ℹ️ Brief already exists for user ${userId} on ${today}. Skipping.`);
        } else {
            // 3. Insert the mock brief
            await db.insert(briefs).values({
                userId: userId,
                ...mockBrief,
                date: today // Ensure date is today
            });
            console.log('✅ Brief data seeded successfully!');
        }

    } catch (error) {
        console.error('❌ Error seeding data:', error);
        process.exit(1);
    } finally {
        process.exit(0);
    }
}

seed();
