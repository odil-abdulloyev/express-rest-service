/**
 * Users storage
 * @type {Array<User>}
 */
const users = [];

/**
 * Get all users
 * @returns {Promise<Array<User>>} all users
 */
const getAll = async () => users;

/**
 * Create new user
 * @param {User} user User instance
 * @returns {Promise<void>} void
 */
const create = async (user) => {
  users.push(user);
};

/**
 * Get user by id
 * @param {string} id user id
 * @returns {Promise<User|undefined>} user by id
 */
const getById = async (id) => users.find((user) => user.id === id);

/**
 * Update board
 * @param {User} newUser new user
 * @returns {Promise<boolean>} true if updated, otherwise - false
 */
const update = async (newUser) => {
  const idx = users.findIndex((user) => user.id === newUser.id);
  if (idx >= 0) {
    users.splice(idx, 1, newUser);
    return true;
  }
  return false;
};

/**
 * Remove user by id
 * @param {string} id user id
 * @returns {Promise<boolean>} true if removed, otherwise - false
 */
const remove = async (id) => {
  const idx = users.findIndex((user) => user.id === id);
  if (idx >= 0) {
    users.splice(idx, 1);
    return true;
  }
  return false;
};

export { getAll, create, getById, update, remove };
