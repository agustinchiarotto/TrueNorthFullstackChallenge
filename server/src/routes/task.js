const express = require('express');
const app = express.Router();

const taskController = require('../controllers/task');
const { internalError } = require('../helper/error');
const { getTasksFromExternalAPI } = require('../utils/hipsumAPI');

app.get('/', async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 3;
  let tasks = await taskController.getTasks({ limit });
  if (tasks.length < limit) {
    const newTasks = await getTasksFromExternalAPI(limit - tasks.length);
    tasks = tasks.concat(newTasks);
    const saveResult = await taskController.createManyTaks({ tasks: newTasks });
    if (saveResult.message) {
      return internalError(res, saveResult.message)
    }
    tasks = await taskController.getTasks({ limit });
  }
  if (tasks) {
    return res.status(200).json(tasks);
  }
  return internalError(res, 'Error searching tasks')
});

app.patch('/:_id', taskController.validateUpdateBody, async (req, res) => {
  const result = await taskController.updateTask(req.body, req.params);
  if (!result.message) {
    return res.status(200).json(result);
  } else {
    return res.status(result.status).json({
      title: 'Error on update!',
      message: result.message,
    });
  }
});

module.exports = app;
