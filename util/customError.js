/**
 * @file This file extends Error class with status, message and errors fields.
 * @example throw new CustomError(status, message, errors)
 */

// eslint-disable-next-line import/prefer-default-export
export class CustomError extends Error {
  constructor(message, status, errors, ...params) {
    /** Pass remaining arguments (including vendor specific ones) to parent constructor */
    super(...params);
    this.status = status;
    this.message = message;
    if (errors) {
      this.data = { ...errors };
    }
  }
}
