import { User, Word } from "../types/types";
import { dbQuery } from "../database/dbQuery";
import { randomIntFromInterval } from "../general/randomIntFromInterval";
import { ObjectId } from "mongodb";
import { dbUpdate } from "../database/dbUpdate";

export const getTodayWord = async (user: User): Promise<Word> => {
  const words = await dbQuery(
    {
      level: user.level,
      interest:
        user.interest[randomIntFromInterval(0, user.interest.length - 1)],
    },
    {},
    "words",
  );
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
  const usedWords = await dbQuery(
    { _id: new ObjectId(user.id) },
    { words: 1 },
    "users",
  );
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
  const wordsToUpdate: any[] = usedWords[0].words;
  const today = new Date();
  // @ts-ignore
  for (const word of words) {
    let findMatch: boolean = false;
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
      await dbUpdate(
        { _id: new ObjectId(user.id) },
        { words: wordsToUpdate },
        "users",
      );
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
};
