import BoardColumn from '../../entity/board-column';

export class CreateBoardDto {
  title!: string;

  columns!: BoardColumn[];
}
