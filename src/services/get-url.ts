import { eq } from "drizzle-orm";
import { db } from "../db";
import { urls } from "../db/schema";

export async function getUrl(shortUrl: string) {
    const result = await db.select().from(urls).where(eq(urls.shortUrl, shortUrl));

    if(result.length === 0) {
        throw new Error("URL not found");
    }
    const originalUrl = result[0].originalUrl;
    return originalUrl;
}