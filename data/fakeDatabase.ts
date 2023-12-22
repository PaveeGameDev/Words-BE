import { MongoClient } from "mongodb";

export const fakeDatabase = async () => {
  const url = "mongodb://0.0.0.0:27017/";
  let client: MongoClient;

  try {
    client = await MongoClient.connect(url);
    const db = await client.db("WordsTest");

    const myobj = {
      email: "email",
      name: "name",
      surname: "surname",
      sessionId: "sessionId",
      level: 1,
      language: "Czech",
      interest: ["Cooking"],
      words: [{ date: {year: 2023, month: 11, day: 22}, wordId: "6585b456ca95d649ba96018b" }],
    };
    const result = await db.collection("users").insertOne(myobj);

    const myWord1 = {
      interest: "cooking",
      level: 1,
      word: "tomato",
      description: ["tomato desc", "second tomato desc"],
      synonyms: [],
      translation: ["rajce"],
      example: ["tomatos are cool"],
    };
    const myWord2 = {
      interest: "cooking",
      level: 1,
      word: "apple",
      description: ["apple desc", "second apple desc"],
      synonyms: [],
      translation: ["jablko"],
      example: ["apples are cool"],
    };

    console.log("1 document inserted");
    console.log(result);
    const result2 = await db.collection("words").insertOne(myWord1);
    const result3 = await db.collection("words").insertOne(myWord2);
    console.log(result2, result3);
    await client.close();
  } catch (err) {
    console.error(err);
  }
};
