/**
 * @file This file define the app routes for all end-points.
 */

import express from 'express';
import authRoutes from './auth.routes';

const router = express.Router({ mergeParams: true });

router.use('/auth', authRoutes);

export default router;
