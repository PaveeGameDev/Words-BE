import {Interest, Level, Word} from "../types/types";

export const getWord = (interest: Interest, level: Level):Word => {
    return {
        word: interest,
        description: [
            "used as a greeting or to begin a phone conversation.",
            "say or shout ‘hello’.",
        ],
        synonyms: ["welcome", "good afternoon"],
        translation: ["Ahoj", "Nazdar"],
        example: ["hello there, Katie!", "I pressed the phone button and helloed"],
    };
}