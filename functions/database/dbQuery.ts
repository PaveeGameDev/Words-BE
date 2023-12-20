import { database } from "./database";

export const dbQuery = async (query: any, visibleValues: any) => {
  const db = await database();
  if (!db) return;
  let result;
  await db
    .collection("users")
    .find(query, {projection: visibleValues })
    .toArray()
    .then((value) => (result = value));
  return result;
};
