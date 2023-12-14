import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

const Ajv = require("ajv").default;

const app = express();
const port = 5000;

// Apply CORS middleware
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

app.post('/word/todayWord', (req, res) => {
    const {body} = req
    const ajv = new Ajv();
    const valid = ajv.validate(wordRequestSchema, body);

    if (!valid) {
        res.status(400).send(ajv.errors);

    }else{
        res.json(body)
    }

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

