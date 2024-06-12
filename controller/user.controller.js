const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/user.model');
const upload = require('../helper/uploadConfig');

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

// Create a new user / Sign Up
router.post('/', authenticate, authorize('admin'), upload.single('profileImage'), async (req, res) => {
  try {
    const {
      name, email, password, role, permissions,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      permissions,
      profileImage: req.file ? req.file.path : undefined, // Set profileImage path
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a user
router.put('/:id', authenticate, upload.single('profileImage'), async (req, res) => {
  try {
    // Extract fields from the request body
    const {
      name, email, password, role, permissions,
    } = req.body;

    // Prepare the updated user data
    const updatedUserData = {
      ...(name && { name }),
      ...(email && { email }),
      ...(role && { role }),
      ...(permissions && { permissions }),
      ...(req.file && { profileImage: req.file.path }),
    };

    // Hash the password if it is provided
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedUserData.password = hashedPassword;
    }

    // Find the user by ID and update the user data
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updatedUserData,
      { new: true, runValidators: true },
    );

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error updating user:', error);
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

// Update permission of the users.
router.put('/:id/permissions', authenticate, authorize('admin'), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.sendStatus(404);
    }

    user.permissions = req.body.permissions;
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
