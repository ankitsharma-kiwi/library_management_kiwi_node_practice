import CommonUtils from '../util/common';

const authService = {};

authService.loginUser = async (loginData) => {
  try {
    return {message: 'return from login'};
  } catch (err) {
    return CommonUtils.throwError(err);
  }
};


export default authService;
