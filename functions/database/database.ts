import { MongoClient } from 'mongodb';

export const database = async () => {
    const url = "mongodb://0.0.0.0:27017/";
    let client: MongoClient;

    try {
        client = await MongoClient.connect(url);
        return await client.db("WordsTest");

        // const myobj = { email: "email", name: "name", surname: "surname", sessionId: "sessionId", level: 1, language: "Czech", interest: ["Cooking"], words: [{date: 'Mon Aug 31 2020', word: "cooking"}] };
        // const result = await db.collection("users").insertOne(myobj);

        // console.log("1 document inserted");
        // console.log(result)
        // await client.close()
    } catch (err) {
        console.error(err);
    }
};
