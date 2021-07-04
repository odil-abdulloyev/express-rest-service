import * as boardsRepo from './board.repository';
import IBoard from '../../types/iboard';
import Board from '../../entity/board';

const getAll = async (): Promise<Board[]> => boardsRepo.getAll();

const create = async (board: IBoard): Promise<Board> => boardsRepo.create(board);

const getById = async (id: string): Promise<Board | undefined> => boardsRepo.getById(id);

const update = async (newBoard: IBoard): Promise<boolean> => boardsRepo.update(newBoard);

const remove = async (id: string): Promise<boolean> => boardsRepo.remove(id);

export { getAll, create, getById, update, remove };
