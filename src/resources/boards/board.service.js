const boardsRepo = require('./board.memory.repository');

const getAll = async () => boardsRepo.getAll();

const addBoard = async (board) => boardsRepo.addBoard(board);

const getById = async (id) => boardsRepo.getById(id);

const update = async (newBoard) => boardsRepo.update(newBoard);

const deleteBoard = async (id) => boardsRepo.deleteBoard(id);

module.exports = { getAll, addBoard, getById, update, deleteBoard };
