
const Book = require('../models/bookModel');
const express = require('express');

//get all the books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ data: books });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

//get a book
const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
}

//delet book
const deletBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            res.status(404).json({ message: "book not found" });
        }
        else {
            res.status(200).json({ message: "book deleted successfully" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

//creat Book
const createBook = async (req, res) => {
    try {
       if (
        !req.body.title ||
        !req.body.author ||
        !req.body.price ||
        !req.body.category
       ) {
        return res.status(500).send({message: "send all required fields"})
       }
       const newBook = {
        title : req.body.title,
        author : req.body.title,
        price : req.body.price,
        category : req.body.category
       }
        const book = await Book.create(newBook);
        res.status(200).send(book)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}



module.exports = { getAllBooks, getBook, deletBook, createBook }


