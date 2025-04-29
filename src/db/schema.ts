import { pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core';


export const urls = pgTable('urls', {
    id: serial('id').primaryKey(),
    originalUrl: text('original_url').notNull(),
    shortUrl: text('short_url').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})