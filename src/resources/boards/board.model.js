const { v4 } = require('uuid');

class Board {
  constructor({ id = v4(), title = 'Board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  // static toResponse(user) {
  //   const { id, name, login } = user;
  //   return { id, name, login };
  // }
}

module.exports = Board;
