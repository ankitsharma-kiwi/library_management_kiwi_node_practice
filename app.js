import 'dotenv/config';
import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';

import path from 'path';

import router from './routes/index';
import { connectDb } from './model/index';

const app = express();

app.use('/', express.static(path.resolve(__dirname, '../build')));
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.join(__dirname, 'upload')));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(morgan('combined'));
app.use(cors());
app.use(compression());
app.use('/apidoc', express.static('apidoc'));

app.use('/api/v1', router);

const PORT = process.env.PORT || 8080;

connectDb().then(async () => {
  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});

process.on('uncaughtException', (err) => {
  console.log(`There was an uncaught error: => ${err}`);
});

process.on('unhandledRejection', (reason, p) => {
  console.log(`Unhandled Rejection at: ${p}, reason:, ${reason}`);
});
