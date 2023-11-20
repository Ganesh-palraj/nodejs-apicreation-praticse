import { client } from '../index.js';

export async function createUser(data) {
    return await client
      .db("mongopractise")
      .collection("users")
      .insertOne(data);
  }