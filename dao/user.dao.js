import BaseDao from './base.dao';
import UserModel from '../model/user.model';
import commonUtil from '../util/common';

const userDao = new BaseDao(UserModel);

const PROJECTION = {
  ALL: {},
  common: {},
  auth: {
    email: 1, name: 1, _id: 1, role: 1,
  },
  NAME: { name: 1 },
};

/**
 * Create new user in the database.
 * @property {object} userInfo- The object of user.
 * @returns {User}
 */
async function createUser(userInfo) {
  try {
    const user = new UserModel(userInfo);
    return await user.save();
  } catch (err) {
    return commonUtil.throwError(err);
  }
}

/**
 * get single object of user.
 * @property {object} userInfo- match condition
 * @property {object} condition- update condition
 * @returns {User}
 */
async function getUser(query, projection, populate) {
  try {
    const Query = UserModel.findOne(query, projection ? PROJECTION[projection] : PROJECTION.ALL);
    if (populate) {
      Query.populate({
        path: 'managerId',
        select: 'managerFirstName managerLastName email managerImage emailNotification notification',
      });
    }
    const user = await Query.lean().exec();
    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    return commonUtil.throwError(err);
  }
}

/**
 * get multiple object of user.
 * @property {object} userInfo- match condition
 * @property {object} condition- update condition
 * @returns {User}
 */
async function getUsers(query, projection,
  skipLimit = { skip: 0, limit: 0 },
  sortData = { sort: '_id', sortBy: -1 }) {
  try {
    const user = await UserModel.find(query, projection
      ? PROJECTION[projection] : PROJECTION.ALL)
      .sort({ [sortData.sort]: sortData.sortBy })
      .skip(skipLimit.skip).limit(skipLimit.limit);
    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    return commonUtil.throwError(err);
  }
}

/**
 * function will update a single user object.
 * @property {object} query- match condition
 * @property {object} update- update condition
 * @returns {User}
 */
async function updateUser(query, update) {
  try {
    const user = await userDao.findOneAndUpdate(query, update, { new: true });
    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    return commonUtil.throwError(err);
  }
}

/**
 * function will update a single user object.
 * @property {object} query- match condition
 * @property {object} update- update condition
 * @returns {User}
 */
async function updateUserMultiple(query, update) {
  try {
    const user = await UserModel.update(query, update, { multi: true });
    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    return commonUtil.throwError(err);
  }
}

/**
* get single object of learner.
* @property {object} query- match condition
* @returns {User}
*/
async function learnerCount(query) {
  try {
    return await userDao.findCount(query);
  } catch (err) {
    return commonUtil.throwError(err);
  }
}

/**
  * @description Remove User.
  * @property {object} query- match condition
  * @returns {User}
  */
async function removeUser(query) {
  try {
    return await UserModel.remove(query);
  } catch (err) {
    return commonUtil.throwError(err);
  }
}

/**
 * This function will aggregate data
 * @property {object} query- match condition.
 * @property {object} project- final projected data.
 * @returns {User}
 */
async function aggregateUser(query) {
  try {
    return JSON.parse(JSON.stringify(await UserModel.aggregate(query)));
  } catch (err) {
    return commonUtil.throwError(err);
  }
}

async function getCount(query) {
  try {
    return JSON.parse(JSON.stringify(await UserModel.countDocuments(query)));
  } catch (err) {
    return commonUtil.throwError(err);
  }
}

/**
 * get multiple object of user.
 * @property {object} userInfo- match condition
 * @property {object} condition- update condition
 * @returns {User}
 */
async function getUsersPopulateManager(query, projection,
  skipLimit = { skip: 0, limit: 0 },
  sortData = { sort: '_id', sortBy: -1 }) {
  try {
    const user = await UserModel.find(query, projection
      ? PROJECTION[projection] : PROJECTION.ALL)
      .populate({
        path: 'managerId',
        select: 'managerFirstName managerLastName email ',
      })
      .sort({ [sortData.sort]: sortData.sortBy })
      .skip(skipLimit.skip)
      .limit(skipLimit.limit)
      .lean()
      .exec();
    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    return commonUtil.throwError(err);
  }
}

/**
 * Insert list of users in the database.
 * @property {object} users- The array of user.
 * @returns {User}
 */
async function insertUsers(users) {
  try {
    return await UserModel.insertMany(users);
  } catch (err) {
    return commonUtil.throwError(err);
  }
}

export default {
  getUser,
  createUser,
  updateUser,
  learnerCount,
  getUsers,
  removeUser,
  aggregateUser,
  updateUserMultiple,
  getCount,
  getUsersPopulateManager,
  insertUsers,
};
