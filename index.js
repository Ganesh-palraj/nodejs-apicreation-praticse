import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import moviesRouter from './routes/movies.routes.js';
dotenv.config();
// console.log(process.env)
const app = express();

const PORT = process.env.PORT;

// const MONGO_URL = 'mongodb://127.0.0.1';
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongo is connected !!!");

//middleware - express.json() - (inbuilt middleware)
//app.use -> intercepts -> applies express.json() (inbuilt middleware)
app.use(express.json()); //global way to apply express middleware

// API FOR HOMEPAGE

app.get("/", function (request, response) {
  response.send("welcome to the home page of ganesh first api");
});

app.use('/movies' , moviesRouter);
// app.use('/cast' , castRouter); example of how route root can be easily created.


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export {client};