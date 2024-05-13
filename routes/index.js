/**
 * @file This file define the app routes for all end-points.
 */

import express from 'express';
import authRoutes from './auth.routes';
import bookRoutes from '../controller/book.controller';

const router = express.Router({ mergeParams: true });

router.use('/auth', authRoutes);
router.use('/books', bookRoutes);

export default router;
