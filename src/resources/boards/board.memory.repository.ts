import Board from '../../entity/board';
import IBoard from '../../types/iboard';

const getAll = async (): Promise<Board[]> => Board.find();

const create = async ({title, columns}: IBoard): Promise<Board> => {
  const board = new Board();
  board.columns = columns;
  board.title = title;
  await board.save();
  return board;
};

const getById = async (id: string): Promise<Board | undefined> => Board.findOne(id);

const update = async (newBoard: IBoard): Promise<boolean> => {
  const board = await Board.findOne(newBoard.id);
  if (board) {
    board.title = newBoard.title;
    board.columns = newBoard.columns;
    await board.save();
    return true;
  }
  return false;
};

const remove = async (id: string): Promise<boolean> => {
  const board = await Board.findOne(id);
  if (board) {
    await board.remove();
    return true;
  }
  return false;
};

export { getAll, create, getById, update, remove };
