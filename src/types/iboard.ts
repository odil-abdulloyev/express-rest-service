import BoardColumn from '../entity/board-column';

interface IBoard {
  id: string,
  title: string,
  columns: BoardColumn[]
}

export default IBoard;