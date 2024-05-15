import mongoose from 'mongoose';
import CONSTANTS from '../util/constant';

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: CONSTANTS.BOOK_STATUS, default: 'available' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignedDate: { type: Date },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Book', BookSchema);
