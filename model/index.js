import mongoose from 'mongoose';
import config from '../config/index.config';
import User from './user.model';

const connectDb = () => {
  let connect;
  console.log(config.DATABASE, 'Database is connected');
  if (`${config.DATABASE.databaseUrl}/${config.DATABASE.databaseName}`) {
    connect = mongoose.connect(
      `${config.DATABASE.databaseUrl}/${config.DATABASE.databaseName}`,
      { },
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
};

export { connectDb };

export default models;
