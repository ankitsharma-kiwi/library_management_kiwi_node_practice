import mongoose from 'mongoose';
import config from '../config/index.config';
import User from './user.model';
import Book from './book.model';

const connectDb = () => {
  let connect;
  if (`${config.DATABASE.databaseUrl}`) {
    connect = mongoose.connect(
      `${config.DATABASE.databaseUrl}`,
      { useNewUrlParser: true },
    ).then(
      () => { console.log('Database is connected'); },
      (err) => { console.log(`Can not connect to the database${err}`); },
    );
    mongoose.set('debug', true);
  }
  return connect;
};

const models = {
  User,
  Book,
};

export { connectDb };

export default models;
