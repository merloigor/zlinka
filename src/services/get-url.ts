import { eq } from "drizzle-orm";
import { db } from "../db";
import { urls } from "../db/schema";

export async function getUrl(shortUrl: string) {
    const result = await db.select({ originalUrl: urls.originalUrl }).from(urls).where(eq(urls.shortUrl, shortUrl));

    if (!result.length) {
        return null;
    }

    const originalUrl = result[0]?.originalUrl;
    if (!originalUrl) {
        return null;
    }
    
    return originalUrl;
}