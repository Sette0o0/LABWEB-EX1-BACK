import { MongoClient } from "mongodb"
import { config } from "dotenv"

config()

const url = process.env.DATABASE_URL!

const client = new MongoClient(url)

export const mongoClient = await client.connect()

export const database = process.env.DATABASE_NAME!
export const collection = process.env.DATABASE_COLLECTION!