"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations = void 0;
const BaseDataBase_1 = require("./BaseDataBase");
const Migrations = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield BaseDataBase_1.connection.raw(`
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
        `);
        console.log("Banco de dados adicionado/atualizado com sucesso...");
    }
    catch (error) {
        console.log("Algo de errado, NÃO ESTÁ CERTO...", error.sqlMessage || error.message);
    }
});
exports.Migrations = Migrations;
//# sourceMappingURL=Migrations.js.map