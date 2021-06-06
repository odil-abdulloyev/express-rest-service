import * as boardsRepo from './board.memory.repository';
import Board from './board.model';

const getAll = async () => boardsRepo.getAll();

const create = async (board: Board) => boardsRepo.create(board);

const getById = async (id: string) => boardsRepo.getById(id);

const update = async (newBoard: Board) => boardsRepo.update(newBoard);

const remove = async (id: string) => boardsRepo.remove(id);

export { getAll, create, getById, update, remove };
