import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
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
  response.send("welcome to the home page");
});

// API TO FIND BY ID

app.get("/movies/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  //db.movies.findOne({id: '101'}) mongo shell way to get the data
  // below is nodejs way to get the data as api connection.

  const movie = await client
    .db("mongopractise")
    .collection("movies")
    .findOne({ id: id });
  movie
    ? response.send(movie)
    : response.status(404).send({ message: "Movie not found" });
});

// API TO DELETE BY ID

app.delete("/movies/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  //db.movies.deleteOne({id: '101'}) mongo shell way to get the data
  // below is nodejs way to get the data as api connection.

  const result2 = await client
    .db("mongopractise")
    .collection("movies")
    .deleteOne({ id: id });
  result2.deletedCount > 0
    ? response.send({ message: "Movie deleted successfully" })
    : response.status(404).send({ message: "Movie not found" });
});

// API TO UPDATE COMBINATION OF (GET & POST)

app.put("/movies/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  // console.log(id);
  //db.movies.updateOne({id: id} , {$set : data}) mongo shell way to get the data
  // below is nodejs way to get the data as api connection.

  const result3 = await client
    .db("mongopractise")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
  response.send(result3);
});

// API TO CREATE/POST TO MONGODB

// here every time we post we create a whole movie collection and add to the collection.

app.post("/movies", async function (request, response) {
  const data = request.body;
  console.log(data);

  // db.movies.insertMany(data); mongoshell way of doing this.
  // below is nodejs way to create a data

  const result = await client
    .db("mongopractise")
    .collection("movies")
    .insertMany(data);
  response.send(result);
});

//API TO GET ALL THE MOVIES FROM THE MONGODB

app.get("/movies", async function (request, response) {
  const movies = await client
    .db("mongopractise")
    .collection("movies")
    .find({})
    .toArray();
  response.send(movies);
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
