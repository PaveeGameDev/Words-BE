import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import {generateUniqueSessionId} from "./functions/login/generateUniqueSessionId";
import {fakeUsers} from "./data/fakeUsers";
import {User} from "./functions/types/types";
import {getWord} from "./functions/word/getWord";
import {randomIntFromInterval} from "./functions/general/randomIntFromInterval";
import {checkWord} from "./functions/word/checkWord";
import {getCountries} from "./functions/word/getCountries";
import {getInterests} from "./functions/word/getInterests";
import {getProficiencyLevels} from "./functions/word/getProficiencyLevels";

const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;

// Apply app.use middleware
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    // Perform user authentication, get user ID, and create a session
    const userId = 5; // Replace with actual user ID
    const sessionId = generateUniqueSessionId();

    // Find the user with id: 1 in the fakeUsers array
    const userToModify = fakeUsers.find(user => user.id === userId);

    // Check if the user is found
    if (userToModify) {
        // Modify the sessionId property
        userToModify.sessionId = sessionId;
    } else {
        // Handle the case where the user with id: 1 is not found
        console.error('User with the id not found.');
    }

    // Set the session ID as an HTTP cookie
    res.cookie('session_id', sessionId, { secure: true, httpOnly: true });

    res.json(fakeUsers);
});

app.post('/word/todayWord', (req, res) => {
    const sessionId = req.cookies['session_id'];
    // const userInfo = getUserInfoBySessionId(fakeUsers,sessionId);
    const userInfo:User|undefined = {id: 1, sessionId: 'dashfkl', name: "Patrik", interest: ['School', "Cooking"], language: {name: "Czech", short:"CZ"}, level: 4}
    if(!userInfo) {
        res.writeHead(404).send();
    }else{
        res.json(getWord(userInfo.interest[randomIntFromInterval(0, userInfo.interest.length - 1)], userInfo.level))
    }
});

app.post('/word/checkWord', (req, res) => {
    const body = req.body
    const sessionId = req.cookies['session_id'];
    // const userInfo = getUserInfoBySessionId(fakeUsers,sessionId);
    const userInfo:User|undefined = {id: 1, sessionId: 'dashfkl', name: "Patrik", interest: ['School', "Cooking"], language: {name: "Czech", short:"CZ"}, level: 4}
    if(!userInfo || !req.body['sentence']) {
        res.writeHead(404).send();
    }else{
        res.json(checkWord(req.body["sentence"]))
    }
});

app.get('/signup/countries', (req, res) => {
    res.json(getCountries())
})

app.get('/signup/interests', (req, res) => {
    res.json(getInterests())
})

app.get('/signup/proficiencyLevels', (req, res) => {
    res.json(getProficiencyLevels())
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

