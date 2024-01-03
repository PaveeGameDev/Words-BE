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
    // 1. Extract random interest selection into a function for clarity
    const selectRandomInterest = (interests) => interests[(0, randomIntFromInterval_1.randomIntFromInterval)(0, interests.length - 1)];
    // 2. Simplify query by directly using the selected interest
    const randomInterest = selectRandomInterest(user.interest);
    const words = yield (0, dbQuery_1.dbQuery)({ level: user.level, interest: randomInterest }, {}, "words");
    // 3. Define a default word object to avoid repetition
    const defaultWord = {
        word: "Error",
        description: ["an error occurred, contact the developer"],
        level: 1,
        interest: "none",
        synonyms: [],
        translation: [],
        example: [],
    };
    //TODO fix the no word error
    if (!words)
        return defaultWord;
    const usedWords = yield (0, dbQuery_1.dbQuery)({ _id: new mongodb_1.ObjectId(user.id) }, { words: 1 }, "users");
    // 4. Handle the case where usedWords are not found
    if (!usedWords)
        return defaultWord;
    // @ts-ignore
    const wordsToUpdate = usedWords[0].words || [];
    const today = new Date();
    // @ts-ignore
    for (const word of words) {
        const isWordUsed = wordsToUpdate.some((usedWord) => usedWord.wordId === word._id.toString());
        if (!isWordUsed) {
            // 5. Use Date object methods to format the date more cleanly
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
    // 6. Log the error more informatively
    // @ts-ignore
    console.error("Running out of words. Total words available: ", words.length);
    return defaultWord;
});
exports.getTodayWord = getTodayWord;
