import CONSTANTS from '../util/constant';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  name: { type: String, required: [true, 'User name is required'] },
  email: { type: String, required: [true, 'User email is required'], unique: [true, 'Email is already used.'] },
  password: { type: String, required: true },
  role: { type: String, enum: CONSTANTS.ROLE, required: [true, 'User role is required, it should be admin, sub-admin, user'] },
  profileImage: { type: String },
  permissions: { type: [String], default: [] },
}, {
  timestamps: true,
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// // Method to validate password
UserSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
