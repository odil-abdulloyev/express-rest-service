const boardsRepo = require('./board.memory.repository');

/**
 * Get all boards
 * @returns {Promise<Array<Board>>} - All boards
 */
const getAll = async () => boardsRepo.getAll();

/**
 * Create new board
 * @param {Board} board - Board instance
 * @returns {Promise<void>} - void
 */
const create = async (board) => boardsRepo.create(board);

/**
 * Get board by id
 * @param {number|string} id - board id
 * @returns {Promise<Board|undefined>} - board by id
 */
const getById = async (id) => boardsRepo.getById(id);

/**
 * Update board
 * @param {Board} newBoard - new board
 * @returns {Promise<boolean>} - true if updated, otherwise - false
 */
const update = async (newBoard) => boardsRepo.update(newBoard);

/**
 * Remove board by id
 * @param {number|string} id - board id
 * @returns {Promise<boolean>} - true if removed, otherwise - false
 */
const remove = async (id) => boardsRepo.remove(id);

module.exports = { getAll, create, getById, update, remove };
