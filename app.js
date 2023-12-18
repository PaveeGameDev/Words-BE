"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const generateUniqueSessionId_1 = require("./functions/login/generateUniqueSessionId");
const fakeUsers_1 = require("./data/fakeUsers");
const getWord_1 = require("./functions/word/getWord");
const randomIntFromInterval_1 = require("./functions/general/randomIntFromInterval");
const checkWord_1 = require("./functions/word/checkWord");
const getCountries_1 = require("./functions/word/getCountries");
const getInterests_1 = require("./functions/word/getInterests");
const getProficiencyLevels_1 = require("./functions/word/getProficiencyLevels");
const cookieParser = require('cookie-parser');
const app = (0, express_1.default)();
const port = 5000;
// Apply app.use middleware
app.use(cookieParser());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.post('/login', (req, res) => {
    // Perform user authentication, get user ID, and create a session
    const userId = 5; // Replace with actual user ID
    const sessionId = (0, generateUniqueSessionId_1.generateUniqueSessionId)();
    // Find the user with id: 1 in the fakeUsers array
    const userToModify = fakeUsers_1.fakeUsers.find(user => user.id === userId);
    // Check if the user is found
    if (userToModify) {
        // Modify the sessionId property
        userToModify.sessionId = sessionId;
    }
    else {
        // Handle the case where the user with id: 1 is not found
        console.error('User with the id not found.');
    }
    // Set the session ID as an HTTP cookie
    res.cookie('session_id', sessionId, { secure: true, httpOnly: true });
    res.json(fakeUsers_1.fakeUsers);
});
app.post('/word/todayWord', (req, res) => {
    const sessionId = req.cookies['session_id'];
    // const userInfo = getUserInfoBySessionId(fakeUsers,sessionId);
    const userInfo = { id: 1, sessionId: 'dashfkl', name: "Patrik", interest: ['School', "Cooking"], language: { name: "Czech", short: "CZ" }, level: 4 };
    if (!userInfo) {
        res.writeHead(404).send();
    }
    else {
        res.json([(0, getWord_1.getWord)(userInfo.interest[(0, randomIntFromInterval_1.randomIntFromInterval)(0, userInfo.interest.length - 1)], userInfo.level)]);
    }
});
app.post('/word/checkWord', (req, res) => {
    const sessionId = req.cookies['session_id'];
    // const userInfo = getUserInfoBySessionId(fakeUsers,sessionId);
    const userInfo = { id: 1, sessionId: 'dashfkl', name: "Patrik", interest: ['School', "Cooking"], language: { name: "Czech", short: "CZ" }, level: 4 };
    if (!userInfo || !req.body.data["sentence"]) {
        res.writeHead(404);
        res.end("User info or req.body.sentence not provided");
    }
    else {
        res.json([(0, checkWord_1.checkWord)(req.body.data["sentence"])]);
    }
});
app.get('/signup/countries', (req, res) => {
    res.json((0, getCountries_1.getCountries)());
});
app.get('/signup/interests', (req, res) => {
    res.json((0, getInterests_1.getInterests)());
});
app.get('/signup/proficiencyLevels', (req, res) => {
    res.json((0, getProficiencyLevels_1.getProficiencyLevels)());
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
