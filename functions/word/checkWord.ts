import {CheckWord} from "../types/types";

export const checkWord = (word:string):CheckWord => {
    return {
        score: 3,
        reason:
            word + " - A pretty long reason with a lot of characters involved and a dot at the end.",
    };
}