import { v4 } from 'uuid';

/**
 * @class Task
 * @property {string} id task id
 * @property {string} title task title
 * @property {number} order task order
 * @property {string} description task description
 * @property {string} userId user id
 * @property {string} boardId board id
 * @property {string} columnId column id
 */
class Task {
  /**
   * @constructor task constructor
   * @param {Object} paramsObject task params
   */
  constructor({
                id = v4(),
                title = 'Task',
                order = 0,
                description = 'Task description',
                userId = null,
                boardId = null,
                columnId = null
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

export default Task;
