import { User, Word } from "../types/types";
import { getUsersTodayWord } from "./getUsersTodayWord";
import { getTodayWord } from "./getTodayWord";
import { randomIntFromInterval } from "../general/randomIntFromInterval";

export const getWord = async (user: User): Promise<Word> => {
  //ask the database
  //if word: return today's word
  //else choose a random word out of today's words
  const todayWord = await getUsersTodayWord(user);
  if (todayWord?.word) return todayWord;
  //add the word to learned words
  return getTodayWord(user);
};
