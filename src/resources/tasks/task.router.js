const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getAll(boardId);
  res.status(200).json(tasks);
});

router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const { title, order, description, userId, columnId } = req.body;
  const task = new Task({
    title,
    order,
    description,
    userId,
    columnId,
    boardId,
  });
  await tasksService.addTask(task);
  res.status(201).json(task);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.getById(id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({});
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { title, order, description, userId, boardId, columnId } = req.body;
  const newTask = new Task({
    id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });
  const updated = await tasksService.update(newTask);
  if (updated) {
    res.status(200).json(newTask);
  } else {
    res.status(400).json({});
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const deleted = await tasksService.deleteTask(id);
  if (deleted) {
    res.status(204).json(true);
  } else {
    res.status(404).json(false);
  }
});

module.exports = router;
