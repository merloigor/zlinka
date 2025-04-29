"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrl = getUrl;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../db");
const schema_1 = require("../db/schema");
async function getUrl(shortUrl) {
    const result = await db_1.db.select().from(schema_1.urls).where((0, drizzle_orm_1.eq)(schema_1.urls.shortUrl, shortUrl));
    if (result.length === 0) {
        return null;
    }
    const originalUrl = result[0].originalUrl;
    return originalUrl;
}
