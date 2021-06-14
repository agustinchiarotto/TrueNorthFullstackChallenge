const express = require('express');
const app = express.Router();

const taskController = require('../controllers/task');
const { internalError } = require('../helper/error');
const { successResponse } = require('../helper/apiResponses.js');
const { getTasksFromExternalAPI } = require('../utils/hipsumAPI');

app.get('/', async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 3;
  let tasks = await taskController.getTasks({ limit });
  if (tasks.length < limit) {
    const newTasks = await getTasksFromExternalAPI(limit - tasks.length);
    tasks = tasks.concat(newTasks);
    const saveResult = await taskController.createManyTaks({ tasks: newTasks });
    if (saveResult.message) {
      return internalError(res, saveResult.message);
    }
    tasks = await taskController.getTasks({ limit });
  }
  if (tasks) {
    return successResponse(tasks, res);
  }
  return internalError(res, tasks.message || 'Error searching tasks');
});

app.patch('/:_id', taskController.validateUpdateBody, async (req, res) => {
  const result = await taskController.updateTask(req.body, req.params);
  if (!result.message) {
    return successResponse(result, res);
  } else {
    return res.status(result.status).json({
      title: 'Error on update!',
      message: result.message,
    });
  }
});

module.exports = app;
