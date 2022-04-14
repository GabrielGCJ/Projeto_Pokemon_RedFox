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
            Id VARCHAR(255) PRIMARY KEY,
            Name VARCHAR(255) UNIQUE NOT NULL,
            PokedexNumber INT NOT NULL,
            responsible VARCHAR(255) UNIQUE NOT NULL 
            );
        
        `);
        console.log("Banco de dados adicionado/atualizado com sucesso...");
    }
    catch (_a) {
        console.log("Algo de errado, NÃO ESTÁ CERTO...");
    }
});
exports.Migrations = Migrations;
//# sourceMappingURL=Migrations.js.map