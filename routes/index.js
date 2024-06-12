/**
 * @file This file define the app routes for all end-points.
 */

import express from 'express';
import authRoutes from '../controller/auth.controller';
import bookRoutes from '../controller/book.controller';
import userRoutes from '../controller/user.controller';

const router = express.Router({ mergeParams: true });

router.use('/auth', authRoutes);
router.use('/books', bookRoutes);
router.use('/users', userRoutes);

export default router;
