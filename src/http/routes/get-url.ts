import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { getUrl } from "../../services/get-url";

export const getUrlRoute: FastifyPluginAsyncZod = async (app) => {
    app.get('/shorten/:shortUrl', {
        schema: {
            params: z.object({
                shortUrl: z.string().url(),
            }),
        }
    }, async (request, reply) => {
        const { shortUrl } = request.params;
        const originalUrl = await getUrl(shortUrl);

        return reply.redirect(originalUrl);
    })
}