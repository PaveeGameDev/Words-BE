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
exports.getWord = void 0;
const getUsersTodayWord_1 = require("./getUsersTodayWord");
const getTodayWord_1 = require("./getTodayWord");
const randomIntFromInterval_1 = require("../general/randomIntFromInterval");
const getWord = (user) => __awaiter(void 0, void 0, void 0, function* () {
    //ask the database
    //if word: return today's word
    //else choose a random word out of today's words
    const todayWord = yield (0, getUsersTodayWord_1.getUsersTodayWord)(user);
    if (todayWord === null || todayWord === void 0 ? void 0 : todayWord.word)
        return todayWord;
    //add the word to learned words
    return (0, getTodayWord_1.getTodayWord)(user.interest[(0, randomIntFromInterval_1.randomIntFromInterval)(0, user.interest.length)], user.level);
});
exports.getWord = getWord;
