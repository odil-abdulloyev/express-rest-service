import Board from './board.model';

const boards: Board[] = [];

const getAll = async (): Promise<Board[]> => boards;

const create = async (board: Board): Promise<void> => {
  boards.push(board);
};

const getById = async (id: string): Promise<Board | undefined> => boards.find((board) => board.id === id);

const update = async (newBoard: Board): Promise<boolean> => {
  const idx = boards.findIndex((board) => board.id === newBoard.id);
  if (idx >= 0) {
    boards.splice(idx, 1, newBoard);
    return true;
  }
  return false;
};

const remove = async (id: string): Promise<boolean> => {
  const idx = boards.findIndex((board) => board.id === id);
  if (idx >= 0) {
    boards.splice(idx, 1);
    return true;
  }
  return false;
};

export { getAll, create, getById, update, remove };
