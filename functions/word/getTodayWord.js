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
exports.getTodayWord = void 0;
const dbQuery_1 = require("../database/dbQuery");
const randomIntFromInterval_1 = require("../general/randomIntFromInterval");
const mongodb_1 = require("mongodb");
const dbUpdate_1 = require("../database/dbUpdate");
const getTodayWord = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const words = yield (0, dbQuery_1.dbQuery)({
        level: user.level,
        interest: user.interest[(0, randomIntFromInterval_1.randomIntFromInterval)(0, user.interest.length - 1)],
    }, {}, "words");
    if (!words)
        return {
            word: "Cooking",
            description: [
                "used as a greeting or to begin a phone conversation.",
                "say or shout ‘hello’.",
            ],
            synonyms: ["welcome", "good afternoon"],
            translation: ["Funguje", "To"],
            example: [
                "hello there, Katie!",
                "I pressed the phone button and helloed",
            ],
        };
    const usedWords = yield (0, dbQuery_1.dbQuery)({ _id: new mongodb_1.ObjectId(user.id) }, { words: 1 }, "users");
    //TODO make it do something when the user has no words
    if (!usedWords)
        return {
            word: "Cooking",
            description: [
                "used as a greeting or to begin a phone conversation.",
                "say or shout ‘hello’.",
            ],
            synonyms: ["welcome", "good afternoon"],
            translation: ["Funguje", "To"],
            example: [
                "hello there, Katie!",
                "I pressed the phone button and helloed",
            ],
        };
    // @ts-ignore
    const wordsToUpdate = usedWords[0].words;
    const today = new Date();
    // @ts-ignore
    for (const word of words) {
        let findMatch = false;
        // @ts-ignore
        for (const usedWord of usedWords) {
            if (!findMatch) {
                findMatch = word._id.toString() === usedWord.words[0].wordId;
            }
        }
        if (!findMatch) {
            wordsToUpdate.push({
                date: {
                    year: today.getFullYear(),
                    month: today.getMonth(),
                    day: today.getDate(),
                },
                wordId: word._id.toString(),
            });
            yield (0, dbUpdate_1.dbUpdate)({ _id: new mongodb_1.ObjectId(user.id) }, { words: wordsToUpdate }, "users");
            return word;
        }
    }
    console.error("Running out of words in " + words);
    return {
        word: "Cooking",
        description: [
            "used as a greeting or to begin a phone conversation.",
            "say or shout ‘hello’.",
        ],
        synonyms: ["welcome", "good afternoon"],
        translation: ["Funguje", "To"],
        example: ["hello there, Katie!", "I pressed the phone button and helloed"],
    };
});
exports.getTodayWord = getTodayWord;
