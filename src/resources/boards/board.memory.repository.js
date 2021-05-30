
/**
 * Boards storage
 * @type {Array<Board>}
 */
const boards = [];

/**
 * Get all boards
 * @returns {Promise<Array<Board>>} all boards
 */
const getAll = async () => boards;

/**
 * Create new board
 * @param {Board} board Board instance
 * @returns {Promise<void>} void
 */
const create = async (board) => {
  boards.push(board);
};

/**
 * Get board by id
 * @param {string} id board id
 * @returns {Promise<Board|undefined>} board by id
 */
const getById = async (id) => boards.find((board) => board.id === id);

/**
 * Update board
 * @param {Board} newBoard new board
 * @returns {Promise<boolean>} true if updated, otherwise - false
 */
const update = async (newBoard) => {
  const idx = boards.findIndex((user) => user.id === newBoard.id);
  if (idx >= 0) {
    boards.splice(idx, 1, newBoard);
    return true;
  }
  return false;
};

/**
 * Remove board by id
 * @param {string} id board id
 * @returns {Promise<boolean>} true if removed, otherwise - false
 */
const remove = async (id) => {
  const idx = boards.findIndex((board) => board.id === id);
  if (idx >= 0) {
    boards.splice(idx, 1);
    return true;
  }
  return false;
};

export { getAll, create, getById, update, remove };
