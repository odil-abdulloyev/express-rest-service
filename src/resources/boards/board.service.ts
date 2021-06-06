import * as boardsRepo from './board.memory.repository';
import Board from './board.model';

const getAll = async (): Promise<Board[]> => boardsRepo.getAll();

const create = async (board: Board): Promise<void> => boardsRepo.create(board);

const getById = async (id: string): Promise<Board | undefined> => boardsRepo.getById(id);

const update = async (newBoard: Board): Promise<boolean> => boardsRepo.update(newBoard);

const remove = async (id: string): Promise<boolean> => boardsRepo.remove(id);

export { getAll, create, getById, update, remove };
