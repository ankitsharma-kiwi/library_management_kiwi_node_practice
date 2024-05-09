import { CustomError } from './customError';

async function errorResponse(err, res) {
  let error = {};
  let statusCode;
  if (err.message && err.status) {
    error = err;
    statusCode = err.status;
  } else if (err.stack && err.message) {
    error.trace = err.stack;
    error.message = err.message;
  }
  return res.status(statusCode || 500).json(error);
}

/**
 * @description Middleware to handle common error.
 * @property {Object} payload token
 * @returns {error}
 */
async function throwError(err) {
  if (err.message && err.status) {
    throw new CustomError(err.message, err.status);
  }
  throw err;
}



export default {
  throwError,
  errorResponse,
};
