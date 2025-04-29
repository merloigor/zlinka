"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUrlRoute = void 0;
const zod_1 = __importDefault(require("zod"));
const create_url_1 = require("../../services/create-url");
const createUrlRoute = async (app) => {
    app.post('/shorten', {
        schema: {
            body: zod_1.default.object({
                originalUrl: zod_1.default.string().url(),
            }),
            response: {
                201: zod_1.default.object({
                    originalUrl: zod_1.default.string().url(),
                    shortUrl: zod_1.default.string().url(),
                }),
            },
        }
    }, async (request, reply) => {
        const { originalUrl } = request.body;
        const short = await (0, create_url_1.createUrl)({ originalUrl });
        const shortUrlB = new URL(short, 'https://zlinka.onrender.com').toString();
        return reply.status(201).send({
            originalUrl,
            shortUrl: shortUrlB
        });
    });
};
exports.createUrlRoute = createUrlRoute;
