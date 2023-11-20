import express from "express";
import { createUser} from "../services/users.service.js";
const router = express.Router(); 
 
 // API TO CREATE/POST TO MONGODB
  
  // here every time we post we create a whole movie collection and add to the collection.
  
  router.post("/signup", async function (request, response) {
    const data = request.body;
    console.log(data);
  
    // db.movies.insertMany(data); mongoshell way of doing this.
    // below is nodejs way to create a data
  
    const result = await createUser(data);
    response.send(result);
  });

  export default router;