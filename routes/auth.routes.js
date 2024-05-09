import express from 'express';
import { login } from '../controller';

const authRoutes = express.Router({ mergeParams: true });

authRoutes.post('/login', login);

export default authRoutes;
