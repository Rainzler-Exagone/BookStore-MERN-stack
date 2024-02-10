
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const nodemon = require("nodemon");
const BookRoute = require("./Routes/BookRoute");
const { getAllBooks, deletBook, createBook} = require("./controllers/controller");
const {getBook} = require("./controllers/controller");
const MongoClient = require("mongodb").MongoClient;

const PORT = process.env.PORT || 5000;
const app = express();


mongoose.connect(process.env.mongodb)
    .then((res) => {
        console.log("connected");
    })
    .catch((err) => {
        console.log(err);
    })
app.listen(PORT,() => {
    MongoClient.connect(process.env.mongodb,{useNewUrlParser:true},(error,result) => {
        if (err) throw error;
        console.log("connected");
        
    })
})

//Middleware for handling CORS policy
app.use(cors());

//Prase data received through a JSON format
app.use(express.json());

app.use("/Books",getAllBooks);

app.use("/Book/:id", getBook);

app.use("/Delete/:id",deletBook);

app.use("/saveBook",createBook);
