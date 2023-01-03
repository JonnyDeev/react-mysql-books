const { Router } = require('express');
const {home, getBooks, addNewBook, deleteBook, updateBook} = require('./controllers')
const router = Router()
const mysql = require('mysql')


router.get('/', home)
router.get('/books', getBooks)
router.post('/addNewBook', addNewBook)
router.post('/deleteBook', deleteBook)
router.put('/updateBook/:id', updateBook)

module.exports = router