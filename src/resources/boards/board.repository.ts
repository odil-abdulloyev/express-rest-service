import Board from '../../entity/board';
import IBoard from '../../types/iboard';

const getAll = async (): Promise<Board[]> => Board.find();

const create = async ({title, columns}: IBoard): Promise<Board> => {
  const board = new Board();
  board.title = title;
  board.columns = columns;
  await board.save();
  return board;
};

const getById = async (id: string): Promise<Board | undefined> => Board.findOne(id);

const update = async (newBoard: IBoard): Promise<boolean> => !!await Board.update(newBoard.id, newBoard);

const remove = async (id: string): Promise<boolean> => !!await Board.delete(id);

export { getAll, create, getById, update, remove };
