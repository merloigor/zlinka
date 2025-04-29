"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUrl = createUrl;
const db_1 = require("../db");
const schema_1 = require("../db/schema");
async function createUrl({ originalUrl }) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortUrl = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortUrl += characters[randomIndex];
    }
    const result = await db_1.db.insert(schema_1.urls).values({
        originalUrl,
        shortUrl: shortUrl
    });
    return shortUrl;
}
