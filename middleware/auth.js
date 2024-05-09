import CommonUtils from '../util/common';

export const authenticate = async (req, res, next) => {
  try {
    return next();
  } catch (err) {
    return CommonUtils.errorResponse(err, res);
  }
};
