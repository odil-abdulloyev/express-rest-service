const boards = [];

const getAll = async () => boards;

const addBoard = async (board) => {
  boards.push(board);
};

const getById = async (id) => boards.find((board) => board.id === id);

const update = async (newBoard) => {
  const idx = boards.findIndex((user) => user.id === newBoard.id);
  if (idx >= 0) {
    boards.splice(idx, 1, newBoard);
    return true;
  }
  return false;
};

const deleteBoard = async (id) => {
  const idx = boards.findIndex((board) => board.id === id);
  if (idx >= 0) {
    boards.splice(idx, 1);
    return true;
  }
  return false;
};

module.exports = { getAll, addBoard, getById, update, deleteBoard, boards };
