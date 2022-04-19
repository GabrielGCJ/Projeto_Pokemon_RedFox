import { connection } from "./BaseDataBase"

export const Migrations = async () => {
    try{
        await connection.raw(`
          CREATE TABLE IF NOT EXISTS Poke_Red_Fox (
            Id INT PRIMARY KEY,
            Name VARCHAR(255) UNIQUE NOT NULL,
            Generation INT DEFAULT "-1", 
            EvolutionStage VARCHAR(255) DEFAULT "Bananinha",
            Type1 VARCHAR(255)  DEFAULT "Bananinha",
            Type2 VARCHAR(255)  DEFAULT "Bananinha",
            Weather1 VARCHAR(255) DEFAULT "Bananinha",
            Weather2 VARCHAR(255) DEFAULT "Bananinha",
            STATTOTAL INT DEFAULT "-1",
            ATK INT DEFAULT "-1",
            DEF INT DEFAULT "-1",
            STA INT DEFAULT "-1"        
            );        
        `)
            
        console.log("Banco de dados adicionado/atualizado com sucesso...")
    }catch(error:any){
        console.log( "Algo de errado, NÃO ESTÁ CERTO..." ,error.sqlMessage || error.message )
    }
}




    