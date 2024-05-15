import CONSTANTS from '../util/constant';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String, enum: CONSTANTS.ROLE, required: true,
  },
  profileImage: { type: String },
}, {
  timestamps: true,
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to validate password
userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('user', userSchema);
