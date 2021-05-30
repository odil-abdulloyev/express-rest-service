import { v4 } from 'uuid';

class Board {
  id: string;
  title: string;
  columns: Object[];
  constructor({ id = v4(), title = 'Board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export default Board;
