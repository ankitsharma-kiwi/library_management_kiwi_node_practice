const hashKey = process.env.HASH_KEY;

const landgrid_token = process.env.LANDGRID_TOKEN;

const DATABASE = {
  databaseUrl: process.env.DATABASE_URL,
  databaseName: process.env.DATABASE_NAME,
};

const aws = {
  key: '',
  secret: '',
  region: '',
  bucket: '',
};

const tokenSecret = 'test';
const saltRound = process.env.SALT_ROUND;
const SES = {
  SES_HOST: process.env.SES_HOST,
  SES_PORT: process.env.SES_PORT,
  SMTP_USER_NAME: process.env.SMTP_USER_NAME,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
};

const email = {
  userName: '',
  password: '',
};

const STRIPE_ID = process.env.STRIPE_TEST_ID;

const { NODE_ENV } = process.env;

module.exports = {
  aws,
  tokenSecret,
  saltRound,
  SES,
  email,
  hashKey,
  landgrid_token,
  STRIPE_ID,
  NODE_ENV,
  DATABASE,
};
