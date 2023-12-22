import { User, Word } from "../types/types";
import { dbQuery } from "../database/dbQuery";
import { ObjectId } from "mongodb";

//TODO the word it the database is defined as a string and the date same, it needs to be defined better, probably some id
// pointing to word and a year,month,day format for the date. Currently crashes when finds as it returns string instead of a Word object
export const getUsersTodayWord = async (
  user: User,
): Promise<Word | undefined> => {
  const result = await dbQuery(
    { _id: new ObjectId(user.id) },
    { words: 1 },
    "users",
  );
  // @ts-ignore
  if (!result) return;
  const today = new Date();

  if (
    //@ts-ignore
    result[0].words[result[0].words.length - 1].date.year !==
    today.getFullYear()
  )
    return;

  if (
    //@ts-ignore
    result[0].words[result[0].words.length - 1].date.month !== today.getMonth()
  )
    return;
  //@ts-ignore
  if (result[0].words[result[0].words.length - 1].date.day !== today.getDate())
    return;

  const word = await dbQuery(
    {
      //@ts-ignore
      _id: new ObjectId(result[0].words[result[0].words.length - 1].wordId),
    },
    {},
    "words",
  );

  // @ts-ignore
  return word[0];
};
