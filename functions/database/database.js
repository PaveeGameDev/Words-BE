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
exports.database = void 0;
const mongodb_1 = require("mongodb");
const database = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "mongodb://0.0.0.0:27017/";
    let client;
    try {
        client = yield mongodb_1.MongoClient.connect(url);
        return yield client.db("WordsTest");
        // const myobj = { email: "email", name: "name", surname: "surname", sessionId: "sessionId", level: 1, language: "Czech", interest: ["Cooking"], words: [{date: 'Mon Aug 31 2020', word: "cooking"}] };
        // const result = await db.collection("users").insertOne(myobj);
        // console.log("1 document inserted");
        // console.log(result)
        // await client.close()
    }
    catch (err) {
        console.error(err);
    }
});
exports.database = database;
