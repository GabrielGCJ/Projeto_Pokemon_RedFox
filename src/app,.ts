import express,{ Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import knex, { Knex } from "knex";

dotenv.config();

export const connection: Knex = knex({
    client: "mysql",
    connection: {
       host: process.env.DB_HOST,
       user: process.env.DB_USER,
       password: process.env.DB_PASS,
       database: process.env.DB_SCHEMA,
       port: 3306,
       multipleStatements: true
    }
 })

export const app: Express = express();

app.use(express.json());
app.use(cors());

    const server = app.listen(process.env.PORT || 3003, () => {
        if (server) {
            const address = server.address() as AddressInfo;
            console.log(`Servidor Rodando em http://localhost:
//             ${address.port}`);
        } else {
            console.error(`Falha no Servidor...`);
        }
}); 
