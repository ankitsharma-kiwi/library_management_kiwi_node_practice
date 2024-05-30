const mongoose = require('mongoose');

const BookHistorySchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true },
  date: { type: Date, default: Date.now },
  assignedDate: { type: Date },
  returnDate: { type: Date },
});

const BookHistory = mongoose.model('BookHistory', BookHistorySchema);

module.exports = BookHistory;
