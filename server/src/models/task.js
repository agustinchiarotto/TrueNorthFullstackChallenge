const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = Schema({
  task: String,
  isCompleted: Boolean,
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
