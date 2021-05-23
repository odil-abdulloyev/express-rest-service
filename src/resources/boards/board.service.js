const boardsRepo = require('./board.memory.repository');

const getAll = async () => boardsRepo.getAll();

const create = async (board) => boardsRepo.create(board);

const getById = async (id) => boardsRepo.getById(id);

const update = async (newBoard) => boardsRepo.update(newBoard);

const remove = async (id) => boardsRepo.remove(id);

module.exports = { getAll, create, getById, update, remove };
