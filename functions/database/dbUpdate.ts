import { database } from "./database";

export const dbUpdate = async (query: any, newValues: any, dbName: string) => {
  const db = await database();
  if (!db) return;
  let result;
  await db
    .collection(dbName)
    .updateMany(query, { $set: newValues })
    .then((value) => (result = value));
  return result;
};
