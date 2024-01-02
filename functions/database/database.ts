import { MongoClient } from "mongodb";

export const database = async () => {
  const url = "mongodb://0.0.0.0:27017/";
  let client: MongoClient;
  try {
    client = await MongoClient.connect(url);
    return await client.db("WordsTest");
  } catch (err) {
    console.error(err);
  }
};
