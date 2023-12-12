import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

// Apply CORS middleware
app.use(cors());

// Your routes and other middleware go here

app.get('/', (req, res) => {
    res.send('Hello from the Node.js server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

