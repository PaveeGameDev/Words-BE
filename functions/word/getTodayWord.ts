import { User, Word } from "../types/types";
import { dbQuery } from "../database/dbQuery";
import { randomIntFromInterval } from "../general/randomIntFromInterval";
import { ObjectId } from "mongodb";
import { dbUpdate } from "../database/dbUpdate";

export const getTodayWord = async (user: User): Promise<Word> => {
  // 1. Extract random interest selection into a function for clarity
  const selectRandomInterest = (interests: string[]) =>
    interests[randomIntFromInterval(0, interests.length - 1)];

  // 2. Simplify query by directly using the selected interest
  const randomInterest: string = selectRandomInterest(user.interest);
  const words = await dbQuery(
    { level: user.level, interest: randomInterest },
    {},
    "words",
  );

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

  if (!words) return defaultWord;

  const usedWords = await dbQuery(
    { _id: new ObjectId(user.id) },
    { words: 1 },
    "users",
  );

  // 4. Handle the case where usedWords are not found
  if (!usedWords) return defaultWord;

  // @ts-ignore
  const wordsToUpdate = usedWords[0].words || [];
  const today = new Date();

  // @ts-ignore
  for (const word of words) {
    const isWordUsed = wordsToUpdate.some(
      (usedWord: any) => usedWord.wordId === word._id.toString(),
    );

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

      await dbUpdate(
        { _id: new ObjectId(user.id) },
        { words: wordsToUpdate },
        "users",
      );
      return word;
    }
  }

  // 6. Log the error more informatively
  // @ts-ignore
  console.error("Running out of words. Total words available: ", words.length);

  return defaultWord;
};
