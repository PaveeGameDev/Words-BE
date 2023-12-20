import {Interest, Level, Word} from "../types/types";

export const getTodayWord = (interest: Interest, level: Level):Word => {
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
}