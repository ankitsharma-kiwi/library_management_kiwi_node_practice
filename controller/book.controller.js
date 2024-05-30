const express = require('express');

const router = express.Router();
const BookModel = require('../model/book.model');
const UserModel = require('../model/user.model');
const BookHistory = require('../model/bookHistory.model');
const { authenticate, authorize } = require('../middleware/auth');

// Get All Book
router.get('/', authenticate, async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json({ books });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create Book
router.post('/', authenticate, async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = await BookModel.findOne({ title });
    if (book) {
      return res.status(400).json({ error: 'Book already exists' });
    }
    const newBook = new BookModel({ title, author });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// assign book
router.post('/assign', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { bookId, userId } = req.body;

    const book = await BookModel.findById(bookId);
    if (!book || book.assignedTo) {
      return res.status(400).json({ error: 'Book is already assigned or does not exist' });
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    book.assignedTo = user._id;
    book.assignedDate = new Date();
    book.returnDate = new Date(new Date().setDate(new Date().getDate() + 7)); // 1 week

    await book.save();

    const history = new BookHistory({
      book: book._id,
      user: user._id,
      action: 'assign',
      assignedDate: new Date(),
      returnDate: '',
    });
    await history.save();

    res.status(200).json(book);
  } catch (error) {
    console.error('Error assigning book:', error);
    res.status(500).json({ error: error.message });
  }
});

// Return Book
router.post('/return', authenticate, async (req, res) => {
  try {
    const { bookId } = req.body;

    const book = await BookModel.findById(bookId);
    if (!book || !book.assignedTo) {
      return res.status(400).json({ error: 'Book is not assigned or does not exist' });
    }

    const user = await UserModel.findById(book.assignedTo);
    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    const history = new BookHistory({
      book: book._id,
      user: user._id,
      action: 'return',
      returnDate: new Date(),
      assignedDate: book.assignedDate,
    });
    await history.save();

    book.assignedTo = null;
    book.assignedDate = null;
    book.returnDate = new Date();

    await book.save();

    res.status(200).json(book);
  } catch (error) {
    console.error('Error returning book:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/assigend-user-details', authenticate, async (req, res) => {
  try {
    const { bookId } = req.body;
    const book = await BookModel.findById(bookId);
    if (book?.assignedTo) {
      const user = await UserModel.findById(book.assignedTo).select('name email -_id');
      const newObj = { ...book._doc, assignedTo: user };
      res.json(newObj);
    } else {
      res.status(404).json({ message: 'Book not found.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:bookId/history', authenticate, async (req, res) => {
  try {
    const { bookId } = req.params;
    const history = await BookHistory.find({ book: bookId }).populate('user', 'name email');

    res.status(200).json(history);
  } catch (error) {
    console.error('Error fetching book history:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
