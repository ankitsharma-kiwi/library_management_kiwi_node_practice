import mongoose from 'mongoose';

import CONSTANTS from '../util/constant';

const userSchema = new mongoose.Schema({
  email: CONSTANTS.MODEL.TYPE_STRING_INDEX,
}, {
  timestamps: true,
});

const User = mongoose.model('user', userSchema);

export default User;
