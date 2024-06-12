import mongoose from 'mongoose';
import CONSTANTS from '../util/constant';

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be at least 3 characters long'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    minlength: [3, 'Author must be at least 3 characters long'],
  },
  description: {
    type: String,
    maxlength: [500, 'Description can be at most 500 characters long'],
  },
  status: {
    type: String,
    enum: CONSTANTS.BOOK_STATUS,
    default: 'available',
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  assignedDate: {
    type: Date,
    validate: {
      validator(value) {
        return value ? value <= Date.now() : true;
      },
      message: 'Assigned date cannot be in the future',
    },
  },
  returnDate: {
    type: Date,
    validate: {
      validator(value) {
        return this.assignedDate ? value > this.assignedDate : true;
      },
      message: 'Return date must be after assigned date',
    },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Book', BookSchema);
