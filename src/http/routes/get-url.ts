import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { getUrl } from "../../services/get-url";

export const getUrlRoute: FastifyPluginAsyncZod = async (app) => {
    app.get('/:shortUrl', {
        schema: {
            params: z.object({
                shortUrl: z.string(),
            }),
        }
    }, async (request, reply) => {
        const { shortUrl } = request.params;
        const originalUrl = await getUrl(shortUrl);

        if(!originalUrl) {
            return reply.status(404).send({
                message: "URL not found"
            });
        }

        return reply.redirect(originalUrl);
    })
}