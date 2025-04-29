"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_type_provider_zod_1 = require("fastify-type-provider-zod");
const env_1 = require("../env");
const create_url_1 = require("./routes/create-url");
const get_url_1 = require("./routes/get-url");
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const port = Number(env_1.env.PORT);
const app = (0, fastify_1.default)().withTypeProvider();
app.setValidatorCompiler(fastify_type_provider_zod_1.validatorCompiler);
app.setSerializerCompiler(fastify_type_provider_zod_1.serializerCompiler);
app.register(swagger_1.default, {
    openapi: {
        info: {
            title: 'API Documentation',
            description: 'API for Zlinka app',
            version: '1.0.0'
        }
    }
});
app.register(swagger_ui_1.default, {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header
});
app.register(create_url_1.createUrlRoute);
app.register(get_url_1.getUrlRoute);
app.listen({
    port: port,
    host: '0.0.0.0'
}).then(() => {
    console.log(`Server is running on PORT:${port}`);
});
