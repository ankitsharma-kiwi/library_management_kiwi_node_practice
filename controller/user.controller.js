const express = require('express');
const User = require('../model/user.model');

const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching user');
  }
});

// Create a new user
router.post('/', authenticate, async (req, res) => {
  try {
    const {
      name, email, password, role,
    } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }
    const newUser = new User({
      name, email, password, role,
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send('Error creating user');
  }
});

// Update a user
router.put('/:id', authenticate, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error updating user');
  }
});

// Delete a user
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error deleting user');
  }
});

module.exports = router;
