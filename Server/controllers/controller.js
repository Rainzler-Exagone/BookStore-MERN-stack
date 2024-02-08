
const Book = require('../models/bookModel');
const express = require('express');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({data: books});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}


const getBook= async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
}

// const getBook = async (req, res) => {

//     try {
//         if (
//             !req.body.title ||
//             !req.body.author ||
//             !req.body.descripiton ||
//             !req.body.price ||
//             !req.body.category
//         ) {
//             return response.send(400).json({ message: "all the fields are required" });
//         }
//         const newBook = {
//             title: req.body.Book,
//             author: req.body.author,
//             descripiton: req.body.descripiton,
//             price: req.body.price,
//             category: req.body.category
//         }
//         const book = new create(newBook)
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// }

module.exports = { getAllBooks, getBook }