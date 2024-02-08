const {Router} = require('express');
const {getAllBooks} = require('../controllers/controller.js')
const {getBook} = require('../controllers/controller.js')
const express = require('express');
const route = new Router();

route.get('/Books', getAllBooks);
route.get('/Book/:id', getBook);
