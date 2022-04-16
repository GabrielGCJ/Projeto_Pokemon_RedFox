import { connection } from "./BaseDataBase"

export const Migrations = async () => {
    try{
        await connection.raw(`
          CREATE TABLE IF NOT EXISTS Poke_Red_Fox (
            Id INT PRIMARY KEY,
            Name VARCHAR(255) UNIQUE NOT NULL,
            Generation INT, 
            EvolutionStage INT,
            Type1 VARCHAR(255),
            Type2 VARCHAR(255),
            Weather1 VARCHAR(255),
            Weather2 VARCHAR(255),
            STATTOTAL INT,
            ATK INT,
            DEF INT,
            STA INT,
            CP40 INT,
            CP39 INT
            );        
        `)
            
        console.log("Banco de dados adicionado/atualizado com sucesso...")
    }catch{
        console.log("Algo de errado, NÃO ESTÁ CERTO...")
    }
}




    