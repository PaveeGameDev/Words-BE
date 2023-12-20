"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodayWord = void 0;
const getTodayWord = (interest, level) => {
    //query the db
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
};
exports.getTodayWord = getTodayWord;
