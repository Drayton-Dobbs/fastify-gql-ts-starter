"use strict";
import Fastify from "fastify";
import mercurius from "mercurius";
import { schema } from "./schema";
import { env } from './env'
const app = Fastify();

app.register(mercurius, {
  schema,
  graphiql: true,
});

app.listen({ port: 3000 });