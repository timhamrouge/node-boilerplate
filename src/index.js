import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

// set up a library to specify an allowlist
app.use(cors());

console.log('Hello World, simple nodemon loading app');

console.log(process.env.MY_SECRET);

function sayHello() {
    return 'Hello World';
};

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})

export default sayHello;