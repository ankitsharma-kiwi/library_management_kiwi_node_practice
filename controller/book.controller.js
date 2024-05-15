const express = require('express');

const router = express.Router();
const BookModel = require('../model/book.model');
const { authenticate, authorize } = require('../middleware/auth');

// Get All Book
router.get('/', async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json({ books });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create Book
router.post('/', async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new BookModel({ title, author });
    await newBook.save();
    console.log('success');
    res.status(201).json(newBook);
  } catch (err) {
    console.log('err', err);
    res.status(500).json({ error: err.message });
  }
});

// Assign Book to User
router.post('/assign-book', authenticate, authorize('sub-admin'), async (req, res) => {
  try {
    const { bookId, userId } = req.body;
    const book = await BookModel.findById(bookId);

    if (book.assignedTo) {
      return res.status(400).json({ message: 'Book already assigned.' });
    }

    book.assignedTo = userId;
    book.assignedDate = new Date();
    await book.save();

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Return Book
router.post('/return-book', authenticate, authorize('sub-admin'), async (req, res) => {
  try {
    const { bookId } = req.body;
    const book = await BookModel.findById(bookId);

    if (!book.assignedTo) {
      return res.status(400).json({ message: 'Book is not assigned.' });
    }

    book.assignedTo = null;
    book.assignedDate = null;
    await book.save();

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
