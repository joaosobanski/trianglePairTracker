
import * as mongoDB from "mongodb";
import logger from "../utils/logger";
import * as dotenv from 'dotenv'
dotenv.config()

export const collections: {
    tokens?: mongoDB.Collection
    triangle?: mongoDB.Collection
} = {}

export async function connectToDatabase() {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DATABASE as string);


    const db: mongoDB.Db = client.db(process.env.DATABASENAME);

    const tokens: mongoDB.Collection = db.collection("tokens");
    const triangle: mongoDB.Collection = db.collection("triangle");

    collections.tokens = tokens;
    collections.triangle = triangle;

}