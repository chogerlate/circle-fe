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
    circle: jsonb('circle').$type<{ name: string, update: string, source: string }[]>().notNull(),
    world: jsonb('world').$type<{ headline: string, summary: string, source: string }[]>().notNull(),
    topics: jsonb('topics').$type<{ topic: string, update: string, source: string }[]>().notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});
