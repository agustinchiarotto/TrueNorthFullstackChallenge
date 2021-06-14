const Task = require('../models/task');

const createTask = async ({ task, isCompleted }) => {
  try {
    let newTask = new Task({
      task,
      isCompleted,
    });
    return newTask.save();
  } catch (error) {
    return { message: `There was an error saving a new task: ${error}` };
  }
};

const createManyTaks = async ({ tasks }) => {
  try {
    return Task.insertMany(tasks);
  } catch (error) {
    return { message: `There was an error saving a new task: ${error}` };
  }
};

const deleteTaskById = async ({ _id }) => {
  try {
    const taskToUpdate = await Task.findOne({ _id }).catch((err) => err);
    if (taskToUpdate) {
      return taskToUpdate.remove();
    } else {
      return null;
    }
  } catch (error) {
    return { message: `There was an error deleting a task: ${error}` };
  }
};

const getTasks = async ({ limit }) => {
  try {
    return Task.find().limit(limit);
  } catch (error) {
    return { message: `There was an error searching tasks: ${error}` };
  }
};

const updateTask = async ({ isCompleted }, { _id }) => {
  try {
    let taskFound = await Task.findById({ _id });
    if (taskFound) {
      taskFound.isCompleted = isCompleted;
      result = await taskFound.save();
    } else {
      result = { message: 'Task not found' };
    }
    return result;
  } catch (error) {
    result = { message: `There was an error updating a taks: ${error}` };
  }
};

// Validations

const validateCreateBody = (req, res, next) => {
  let errorMsg = null;
  if (!req.body.task) {
    errorMsg = `Bad Request, task parameter is missing.`;
  } else if (!req.body.isCompleted) {
    errorMsg = `Bad Request, isCompleted parameter is missing.`;
  }
  if (!errorMsg) {
    next();
  } else {
    res.status(400).json({ title: 'Error creating new task', errorMsg });
  }
};

const validateUpdateBody = (req, res, next) => {
  if (req.body.isCompleted !== null && req.params._id) {
    next();
  } else {
    res.status(400).json({
      title: 'Error!',
      message: `Bad Request. No parameters to update.`,
    });
  }
};

// EXPORT
module.exports = {
  createTask,
  createManyTaks,
  deleteTaskById,
  getTasks,
  updateTask,

  validateCreateBody,
  validateUpdateBody,
};
