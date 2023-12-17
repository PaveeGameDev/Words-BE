"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const generateUniqueSessionId_1 = require("./functions/login/generateUniqueSessionId");
const getUserInfoBySessionId_1 = require("./functions/login/getUserInfoBySessionId");
const fakeUsers_1 = require("./data/fakeUsers");
const cookieParser = require('cookie-parser');
const Ajv = require("ajv").default;
const app = (0, express_1.default)();
const port = 5000;
// Apply app.use middleware
app.use(cookieParser());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
let wordRequestSchema = {
    "type": "object",
    "properties": {
        "id": { "type": "number" },
    },
    "required": ["id"]
};
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
// Example protected resource endpoint
app.get('/protected_resource', (req, res) => {
    // Retrieve session ID from the cookie
    const sessionId = req.cookies['session_id'];
    console.log(sessionId, fakeUsers_1.fakeUsers);
    // Verify the session ID and get user information from the server-side store
    const userInfo = (0, getUserInfoBySessionId_1.getUserInfoBySessionId)(fakeUsers_1.fakeUsers, sessionId);
    // Perform actions based on user_info
    res.json(userInfo);
});
app.post('/word/todayWord', (req, res) => {
    const sessionId = req.cookies['session_id'];
    // const userInfo = getUserInfoBySessionId(fakeUsers,sessionId);
    const userInfo = { id: 1, sessionId: 'dashfkl', name: "Patrik", interest: ['School', "Cooking"], language: "CZ", level: 4 };
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
