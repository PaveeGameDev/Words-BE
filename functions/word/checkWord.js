"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkWord = void 0;
const openAI_1 = require("../general/openAI");
const checkWord = (word, sentence) => {
    return (0, openAI_1.openAI)([
        {
            role: "system",
            content: "Respond ONLY JSON. Your response is going to be fed directly into a machine that, if it is not fed, a JSON will break in this format: {score: number, reason:string}  " +
                "  provide a reason even if the score is perfect\n" +
                "On a scale of 0 to 10, give me whether the word described bellow is used in the sentence correctly. Apply all grammatical rules and if the sentence makes sense.\n" +
                "\n" +
                "Rule 1) Count it as good when the word is usually not used in the way it is used or is connected with a word that is not normally used with.\n" +
                "\n" +
                "Rule 2) If the word is not in the sentence, give it a 0" +
                "\n" +
                "Make sure the sentence doesn’t violate any of the rules.\n" +
                "\n" +
                `The word: ${word}\n` +
                "\n" +
                `The sentence: ${sentence}`,
        },
    ])
        .then((result) => {
        console.log(result.message.content);
        return {
            // @ts-ignore
            score: JSON.parse(result.message.content).score,
            // @ts-ignore
            reason: JSON.parse(result.message.content).reason,
        };
    });
};
exports.checkWord = checkWord;
