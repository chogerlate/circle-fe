import { pgTable, text, timestamp, boolean, uuid, jsonb } from 'drizzle-orm/pg-core';

export const preRegistrations = pgTable('pre_registrations', {
    id: uuid('id').defaultRandom().primaryKey(),
    email: text('email').notNull().unique(),
    city: text('city').notNull(),
    interests: jsonb('interests').$type<string[]>().notNull(),
    people: jsonb('people').$type<string[]>().notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const briefs = pgTable('briefs', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').notNull(), // Links to Supabase Auth user
    date: text('date').notNull(), // YYYY-MM-DD
    // Complex sections as JSONB
    social: jsonb('social').$type<{
        friends: { name: string, update: string, source: string }[],
        following: { name: string, update: string, source: string }[],
        trending: { topic: string, summary: string, source: string }[]
    }>().notNull(),
    news: jsonb('news').$type<{
        thai: { headline: string, summary: string, link: string }[],
        international: { headline: string, summary: string, link: string }[]
    }>().notNull(),
    finance: jsonb('finance').$type<{
        stockOfTheDay: { symbol: string, change: string, reason: string },
        marketSummary: string
    }>().notNull(),
    topics: jsonb('topics').$type<{ topic: string, update: string, source: string }[]>().notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const profiles = pgTable('profiles', {
    id: uuid('id').primaryKey(), // Same as auth.users.id
    email: text('email').notNull(),
    role: text('role').default('user').notNull(),
    stage: text('stage').default('onboarding').notNull(), // onboarding, processing, active
    createdAt: timestamp('created_at').defaultNow().notNull(),
});
