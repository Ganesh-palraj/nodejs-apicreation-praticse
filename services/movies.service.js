import { client } from '../index.js';

export async function getAllMovies() {
  return await client
    .db("mongopractise")
    .collection("movies")
    .find({})
    .toArray();
}
export async function updateMovieById(id, data) {
  return await client
    .db("mongopractise")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
export async function createMovies(data) {
  return await client
    .db("mongopractise")
    .collection("movies")
    .insertMany(data);
}
export async function deleteMovieById(id) {
  return await client
    .db("mongopractise")
    .collection("movies")
    .deleteOne({ id: id });
}
export async function getMovieById(id) {
  return await client
    .db("mongopractise")
    .collection("movies")
    .findOne({ id: id });
}
