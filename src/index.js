import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

// set up a library to specify an allowlist
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({message: "Hello World"});
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})

export default app;