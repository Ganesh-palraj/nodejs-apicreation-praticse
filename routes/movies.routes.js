import express from "express";
import { getMovieById, deleteMovieById, updateMovieById, createMovies, getAllMovies } from "../services/movies.service.js";
const router = express.Router();
  

// API TO FIND BY ID

router.get("/:id", async function (request, response) {
    const { id } = request.params;
    console.log(id);
    //db.movies.findOne({id: '101'}) mongo shell way to get the data
    // below is nodejs way to get the data as api connection.
  
    const movie = await getMovieById(id);
    movie
      ? response.send(movie)
      : response.status(404).send({ message: "Movie not found" });
  });
  
  // API TO DELETE BY ID
  
  router.delete("/:id", async function (request, response) {
    const { id } = request.params;
    console.log(id);
    //db.movies.deleteOne({id: '101'}) mongo shell way to get the data
    // below is nodejs way to get the data as api connection.
  
    const result2 = await deleteMovieById(id);
    result2.deletedCount > 0
      ? response.send({ message: "Movie deleted successfully" })
      : response.status(404).send({ message: "Movie not found" });
  });
  
  // API TO UPDATE COMBINATION OF (GET & POST)
  
  router.put("/:id", async function (request, response) {
    const { id } = request.params;
    const data = request.body;
    // console.log(id);
    //db.movies.updateOne({id: id} , {$set : data}) mongo shell way to get the data
    // below is nodejs way to get the data as api connection.
  
    const result3 = await updateMovieById(id, data);
    response.send(result3);
  });
  
  // API TO CREATE/POST TO MONGODB
  
  // here every time we post we create a whole movie collection and add to the collection.
  
  router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data);
  
    // db.movies.insertMany(data); mongoshell way of doing this.
    // below is nodejs way to create a data
  
    const result = await createMovies(data);
    response.send(result);
  });
  
  //API TO GET ALL THE MOVIES FROM THE MONGODB
  
  router.get("/", async function (request, response) {
    const movies = await getAllMovies();
    response.send(movies);
  });

  export default router;


