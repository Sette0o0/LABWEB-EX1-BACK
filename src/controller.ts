import type { FastifyInstance, FastifyRequest } from "fastify";
import { servicoDeUsuario } from "./service.js";

export function controller(app: FastifyInstance) {
    app.get(
        "/",
        async () => {
            return servicoDeUsuario.listarUsuarios()
        }
    )
    app.post(
        "/",
        async (request) => {
            return servicoDeUsuario.criarUsuario(request.body)
        }
    )
    app.put(
        "/:id",
        async (request) => {
            return servicoDeUsuario.atualizarUsuario(request.params.id, request.body)
        }
    )
    app.delete(
        "/:id",
        async (request) => {
            return servicoDeUsuario.excluirUsuario(request.params.id)
        }
    )
}