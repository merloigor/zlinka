"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlRoute = void 0;
const zod_1 = __importDefault(require("zod"));
const get_url_1 = require("../../services/get-url");
const getUrlRoute = async (app) => {
    app.get('/:shortUrl', {
        schema: {
            params: zod_1.default.object({
                shortUrl: zod_1.default.string().url(),
            }),
        }
    }, async (request, reply) => {
        const { shortUrl } = request.params;
        const originalUrl = await (0, get_url_1.getUrl)(shortUrl);
        return reply.redirect(originalUrl);
    });
};
exports.getUrlRoute = getUrlRoute;
