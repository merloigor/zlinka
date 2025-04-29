import fastify from "fastify";
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { env } from "../env";
import { createUrlRoute } from "./routes/create-url";
import { getUrlRoute } from "./routes/get-url";

const port = env.PORT;

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createUrlRoute);
app.register(getUrlRoute);

app.listen({
    port: port as number,
    host: '0.0.0.0'
}).then(() => {
    console.log(`Server is running on PORT:${port}`);
});