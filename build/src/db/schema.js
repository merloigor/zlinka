"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urls = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.urls = (0, pg_core_1.pgTable)('urls', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    originalUrl: (0, pg_core_1.text)('original_url').notNull(),
    shortUrl: (0, pg_core_1.text)('short_url').notNull(),
    createdAt: (0, pg_core_1.timestamp)('created_at', { withTimezone: true }).notNull().defaultNow(),
});
