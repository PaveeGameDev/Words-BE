"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const Ajv = require("ajv").default;
const app = (0, express_1.default)();
const port = 5000;
// Apply CORS middleware
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
app.post('/word/todayWord', (req, res) => {
    const { body } = req;
    const ajv = new Ajv();
    const valid = ajv.validate(wordRequestSchema, body);
    if (!valid) {
        res.status(400).send(ajv.errors);
    }
    else {
        res.json(body);
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
