const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const tasksService = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const { name, login, password } = req.body;
  const user = new User({ name, login, password });
  await usersService.addUser(user);
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(404).json({});
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { name, login, password } = req.body;
  const newUser = new User({ id, name, login, password });
  const updated = await usersService.update(newUser);
  if (updated) {
    res.status(200).json(User.toResponse(newUser));
  } else {
    res.status(400).json({});
  }
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const deleted = await usersService.deleteUser(id);
  await tasksService.unassignUser(id);
  if (deleted) {
    res.status(204).json(true);
  } else {
    res.status(404).json(false);
  }
});

module.exports = router;
