"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const mercurius_1 = __importDefault(require("mercurius"));
const schema_js_1 = require("./schema.js");
const app = (0, fastify_1.default)();
app.register(mercurius_1.default, {
    schema: schema_js_1.schema,
    graphiql: true,
});
app.listen({ port: 3000 });
