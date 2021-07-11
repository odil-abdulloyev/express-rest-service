import { BoardColumn } from '../board-column.entity';

export class CreateBoardDto {
  title!: string;

  columns!: BoardColumn[];
}
