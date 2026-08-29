import fastify from "fastify"
import cors from "@fastify/cors"
import { controller } from "./controller.js"

const app = fastify()

await app.register(cors, {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"]
})

app.register(controller)

app.listen({
    port: 3000
})
console.log("servidor rodando em http://localhost:3000")