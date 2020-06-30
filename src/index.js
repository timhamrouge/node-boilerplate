import 'dotenv/config';
import express from 'express';

const app = express();

console.log('Hello World, simple nodemon loading app');

console.log(process.env.MY_SECRET);

function sayHello() {
    return 'Hello World';
};

app.listen(3000, () => {
    console.log('App listening on port 3000')
})

export default sayHello;