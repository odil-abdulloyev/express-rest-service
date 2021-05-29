const { v4 } = require('uuid');

/**
 * @class Board
 * @property {string} id board id
 * @property {string} title board title
 * @property {Array} columns board columns
 */
class Board {
  /**
   * @constructor board constructor
   * @param {Object} paramsObject board params
   */
  constructor({ id = v4(), title = 'Board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
