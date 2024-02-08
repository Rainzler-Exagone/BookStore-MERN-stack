
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const nodemon = require("nodemon");
const BookRoute = require("./Routes/BookRoute");
const { getAllBooks } = require("./controllers/controller");
const {getBook} = require("./controllers/controller");
const MongoClient = require("mongodb").MongoClient;

const PORT = process.env.PORT || 5000;
const app = express();

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })
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


app.use(cors());

app.use(express.json());

app.use("/Books",getAllBooks);

app.use("/Book/:id", getBook);


