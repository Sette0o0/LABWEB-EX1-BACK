import fastify from "fastify"
import { controller } from "./controller.js"

const app = fastify()

app.register(controller)

app.listen({
    port: 3000
})
console.log("servidor rodando em http://localhost:3000")