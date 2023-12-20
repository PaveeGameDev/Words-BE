import { User, Word } from "../types/types";
import { dbQuery } from "../database/dbQuery";
import { ObjectId } from "mongodb";

//TODO the word it the database is defined as a string and the date same, it needs to be defined better, probably some id
// pointing to word and a year,month,day format for the date. Currently crashes when finds as it returns string instead of a Word object
export const getUsersTodayWord = async (
  user: User,
): Promise<Word | undefined> => {
  const result = await dbQuery({ _id: new ObjectId(user.id) }, { words: 1 });
  // @ts-ignore
  if (!result || result[result.length - 1].date !== Date.now().toString())
    return;
  // @ts-ignore
  return result[result.length - 1].word;
};
