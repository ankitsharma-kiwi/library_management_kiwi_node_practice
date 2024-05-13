import mongoose from 'mongoose';

import CONSTANTS from '../util/constant';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String, default: 'admin', enum: CONSTANTS.ROLE, required: true,
  },
  profileImage: { type: String },
}, {
  timestamps: true,
});

const User = mongoose.model('user', userSchema);

export default User;
