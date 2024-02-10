const {Router} = require('express');
const {getAllBooks, createBook, updateBook} = require('../controllers/controller.js')
const {getBook} = require('../controllers/controller.js')
const {deletBook} = require('../controllers/controller.js')
const express = require('express');
const route = new Router();

route.get('/Books', getAllBooks);
route.get('/Book/:id', getBook);
route.delete('/Delete/:id',deletBook);
route.post('/saveBook',createBook);
route.put('/updateBook/:id', updateBook)
