import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import {generateUniqueSessionId} from "./functions/login/generateUniqueSessionId";
import {getUserInfoBySessionId} from "./functions/login/getUserInfoBySessionId";
import {fakeUsers} from "./data/fakeUsers";
import {User} from "./functions/types/types";

const cookieParser = require('cookie-parser');
const Ajv = require("ajv").default;

const app = express();
const port = 5000;

// Apply app.use middleware
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let wordRequestSchema = {
    "type": "object",
    "properties": {
        "id": { "type": "number"},
    },
    "required": ["id"]
};

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

// Example protected resource endpoint
app.get('/protected_resource', (req, res) => {
    // Retrieve session ID from the cookie
    const sessionId = req.cookies['session_id'];

    console.log(sessionId, fakeUsers)
    // Verify the session ID and get user information from the server-side store
    const userInfo = getUserInfoBySessionId(fakeUsers,sessionId);

    // Perform actions based on user_info

    res.json(userInfo)
});


app.post('/word/todayWord', (req, res) => {
    const sessionId = req.cookies['session_id'];
    // const userInfo = getUserInfoBySessionId(fakeUsers,sessionId);
    const userInfo:User|undefined = {id: 1, sessionId: 'dashfkl', name: "Patrik", interest: ['School', "Cooking"], language: "CZ", level: 4}


});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

