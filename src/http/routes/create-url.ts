import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { createUrl } from "../../services/create-url";

export const createUrlRoute: FastifyPluginAsyncZod = async (app) => {
    app.post('/shorten', {
        schema: {
            body: z.object({
                originalUrl: z.string().url(),
            })
        }
    }, async (request, reply) => {
        const { originalUrl } = request.body;
        const short = await createUrl({ originalUrl });
    }