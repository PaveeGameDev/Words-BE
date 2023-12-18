"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWord = void 0;
const getWord = (interest, level) => {
    return {
        word: interest,
        description: [
            "used as a greeting or to begin a phone conversation.",
            "say or shout ‘hello’.",
        ],
        synonyms: ["welcome", "good afternoon"],
        translation: ["Funguje", "To"],
        example: ["hello there, Katie!", "I pressed the phone button and helloed"],
    };
};
exports.getWord = getWord;
