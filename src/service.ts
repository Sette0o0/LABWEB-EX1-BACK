import { config } from "dotenv"
import { collection, database, mongoClient } from "./db.js"
import { ObjectId } from "mongodb"
config()

class ServicoDeUsuario {
    private usuarioCollection = mongoClient.db(database).collection(collection)

    async listarUsuarios() {
        const usuarios = await this.usuarioCollection.find().toArray()
        return usuarios
    }

    async criarUsuario(usuario: any) {
        const usuarioCriado = await this.usuarioCollection.insertOne(usuario)
        return usuarioCriado
    }

    async atualizarUsuario(id: any, usuarioAtualizado: any) {
        const usuario = await this.usuarioCollection.updateOne({_id: new ObjectId(id)}, {
            $set: usuarioAtualizado
        })
        return usuario
    }

    async excluirUsuario(id: any) {
        const usuario = await this.usuarioCollection.deleteOne({_id: new ObjectId(id)})
    }
}

export const servicoDeUsuario = new ServicoDeUsuario()