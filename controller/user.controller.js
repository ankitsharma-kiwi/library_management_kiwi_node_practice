import AuthService from '../service/auth.service';
import ErrorConstants from '../util/errorConstants';
import CommonUtils from '../util/common';

/**
 * @description User will able to login in the system.
 * @property {object} req Object - to get the parameter
 * @property {object} res Object - response obeject to send the response.
 * @returns {oject} loginData- All login information to login.
 */
export const login = async (req, res) => {
  try {
    const loginData = await AuthService.loginUser(req.body);
    return res.status(ErrorConstants.OK).json(loginData);
  } catch (err) {
    return CommonUtils.errorResponse(err, res);
  }
};
