const { v4 } = require('uuid');

/**
 * @class User
 * @property {string} id user id
 * @property {string} name user name
 * @property {string} login user login
 * @property {string} password user password
 */
class User {
  /**
   * @constructor user constructor
   * @param {Object} paramsObject user params
   */
  constructor({
    id = v4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Validate user
   * @param {Object} user params object
   * @returns {Object} user object
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
