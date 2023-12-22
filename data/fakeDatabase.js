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
exports.fakeDatabase = void 0;
const mongodb_1 = require("mongodb");
const fakeDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "mongodb://0.0.0.0:27017/";
    let client;
    try {
        client = yield mongodb_1.MongoClient.connect(url);
        const db = yield client.db("WordsTest");
        const myobj = {
            email: "email",
            name: "name",
            surname: "surname",
            sessionId: "sessionId",
            level: 1,
            language: "Czech",
            interest: ["Cooking"],
            words: [{ date: { year: 2023, month: 11, day: 22 }, wordId: "6585b456ca95d649ba96018b" }],
        };
        const result = yield db.collection("users").insertOne(myobj);
        const myWord1 = {
            interest: "cooking",
            level: 1,
            word: "tomato",
            description: ["tomato desc", "second tomato desc"],
            synonyms: [],
            translation: ["rajce"],
            example: ["tomatos are cool"],
        };
        const myWord2 = {
            interest: "cooking",
            level: 1,
            word: "apple",
            description: ["apple desc", "second apple desc"],
            synonyms: [],
            translation: ["jablko"],
            example: ["apples are cool"],
        };
        console.log("1 document inserted");
        console.log(result);
        const result2 = yield db.collection("words").insertOne(myWord1);
        const result3 = yield db.collection("words").insertOne(myWord2);
        console.log(result2, result3);
        yield client.close();
    }
    catch (err) {
        console.error(err);
    }
});
exports.fakeDatabase = fakeDatabase;
