const usersRepo = require('./user.memory.repository');

/**
 * Get all users
 * @returns {Promise<Array<User>>} all users
 */
const getAll = async () => usersRepo.getAll();

/**
 * Create new user
 * @param {User} user User instance
 * @returns {Promise<void>} void
 */
const create = async (user) => usersRepo.create(user);

/**
 * Get user by id
 * @param {string} id user id
 * @returns {Promise<User|undefined>} user by id
 */
const getById = async (id) => usersRepo.getById(id);

/**
 * Update board
 * @param {User} newUser new user
 * @returns {Promise<boolean>} true if updated, otherwise - false
 */
const update = async (newUser) => usersRepo.update(newUser);

/**
 * Remove user by id
 * @param {string} id user id
 * @returns {Promise<boolean>} true if removed, otherwise - false
 */
const remove = async (id) => usersRepo.remove(id);

module.exports = { getAll, create, getById, update, remove };
