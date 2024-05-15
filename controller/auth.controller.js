const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

const SECRET = process.env.JWT_SECERET || 'secret';

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    // Check if password is valid
    const isPasswordValid = await user.isValidPassword(password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid email or password');
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      SECRET,
      { expiresIn: '1h' },
    );

    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('An error occurred during login');
  }
});

module.exports = router;
