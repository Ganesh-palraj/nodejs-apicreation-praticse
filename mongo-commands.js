// mongosh 
// starts mongodb and server , shows the current version of the mongodb you have installed.

// const { Collection } = require("mongodb")

// show dbs 
// shows all the database

// use local - switches to local database or if the database is not their it creates it.
// use mongopractise

// db.movies.insertMany([
//     {
//       "id": "99",
//       "name": "Vikram",
//       "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//       "rating": 8.4,
//       "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//       "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//     },
//     {
//       "id": "100",
//       "name": "RRR",
//       "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//       "rating": 8.8,
//       "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//       "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//     },
//     {
//       "id": "101",
//       "name": "Iron man 2",
//       "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//       "rating": 7,
//       "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//       "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//     },
//     {
//       "id": "102",
//       "name": "No Country for Old Men",
//       "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//       "rating": 8.1,
//       "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//       "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//     },
//     {
//       "id": "103",
//       "name": "Jai Bhim",
//       "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//       "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//       "rating": 8.8,
//       "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//     },
//     {
//       "id": "104",
//       "name": "The Avengers",
//       "rating": 8,
//       "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//       "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//       "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//     },
//     {
//       "id": "105",
//       "name": "Interstellar",
//       "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//       "rating": 8.6,
//       "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//       "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//     },
//     {
//       "id": "106",
//       "name": "Baahubali",
//       "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//       "rating": 8,
//       "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//       "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//     },
//     {
//       "id": "107",
//       "name": "Ratatouille",
//       "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//       "rating": 8,
//       "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//       "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//     },
//     {
//       "name": "PS2",
//       "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//       "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//       "rating": 8,
//       "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//       "id": "108"
//     },
//     {
//       "name": "Thor: Ragnarok",
//       "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//       "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//       "rating": 8.8,
//       "trailer": "https://youtu.be/NgsQ8mVkN8w",
//       "id": "109"
//     }
//   ])

// show Collection
// shows the collection in the database

// db.movies.find({})
// shows the document in  the collection , it is like the select command of mongodb

// Db.movies.find({}).count() or .countdocument()
// this command shows the number of documents in your collection

// inclusion command
// tells what values should be included in the projection with the command with either 1 or 0

// cannot mix inclusion and exclusion , but it is only allowed if you want to exclude _id
// which is written as 
// Db.movies.find({},{_id:0 , name: 1 , rating:1})

// db.movies.find({},{name:1,rating:1})

// exclusion command

// db.movies.find({},{name:0,rating:0})

// inclusion and exclusion can't be mixed but can be only mixed 
// to remove _id

// db.movies.find({},{_id:0,name:1,rating:1})

// sorting

// db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:1}) for ascending sort 
// db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:-1}) for descending sort

// use rating:1 for ascending and 
// rating:-1 for descending

// in however way you insert them is the way they are sorted , 
// that is _id is how the data are sorted without andy prompt.

// compound sorting
// db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:1,name:1})

// limit
// db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:1,name:1}).limit(2)

// skip
//  db.movies.find({},{_id:0,name:1,rating:1}).sort({rating:1,name:1}).limit(2).skip(2)




// order collections
// aggregation

// db.metals.insertMany([
//   { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
//   { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
//   { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
//   { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
//   { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
//   { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
//   ]) 

//   stage 1
//   db.metals.aggregate([
//     {$match: {status: "urgent"}}
//   ])

//   db.metals.aggregate([
//     {$match: {status: 'urgent'}},
//     {$group: {_id: "$productName" , totalUrgentQuantity : {$sum:"$quantity"}}}]) 

//   to update
//   first find and then use $set with the data you want to update and then update 

//   db.movies.updateMany({},{$set:{language:"english"}})
