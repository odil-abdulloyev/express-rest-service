const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const tasksService = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.status(200).json(boards);
});

router.route('/').post(async (req, res) => {
  const { title, columns } = req.body;
  const board = new Board({ title, columns });
  try {
    await boardsService.create(board);
    res.status(201).json(board);
  } catch (error) {
    res.status(400).send('Bad request');
  }
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.getById(id);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json({});
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { title, columns } = req.body;
  const newBoard = new Board({ id, title, columns });
  const updated = await boardsService.update(newBoard);
  if (updated) {
    res.status(200).json(newBoard);
  } else {
    res.status(400).json({});
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const deleted = await boardsService.remove(id);
  await tasksService.removeBoardTasks(id);
  if (deleted) {
    res.status(204).json(true);
  } else {
    res.status(404).json(false);
  }
});

module.exports = router;
