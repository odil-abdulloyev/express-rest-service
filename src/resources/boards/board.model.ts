import { v4 } from 'uuid';
import Column from './column.model';

class Board {
  id: string;

  title: string;

  columns: Column[];

  constructor({ id = v4(), title = 'Board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export default Board;
