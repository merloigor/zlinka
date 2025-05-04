import fastify from "fastify";
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { env } from "../env";
import { createUrlRoute } from "./routes/create-url";
import { getUrlRoute } from "./routes/get-url";
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui';
import fastifyCors from "@fastify/cors";

const port = Number(env.PORT);

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: '*',
  })

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(swagger, {
    openapi: {
        info:{
            title: 'API Documentation',
            description: 'API for Zlinka app',
            version: '1.0.0'
        }
    }
});

app.register(swaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header
  });

app.register(createUrlRoute);
app.register(getUrlRoute);

app.listen({
    port: port as number,
    host: '0.0.0.0'
}).then(() => {
    console.log(`Server is running on PORT:${port}`);
});