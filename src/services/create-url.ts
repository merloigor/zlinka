import { db } from "../db";
import { urls } from "../db/schema";

interface createUrlRequest {
    originalUrl: string;
}

export async function createUrl({ originalUrl }: createUrlRequest) {
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortUrl = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortUrl += characters[randomIndex];
    }
    
    const result = await db.insert(urls).values({
        originalUrl,
        shortUrl: shortUrl})

        const short_url = result[0];

        return shortUrl;
}
