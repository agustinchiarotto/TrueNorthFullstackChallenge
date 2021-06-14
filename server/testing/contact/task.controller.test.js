const Task = require('../../src/models/task');
const TaskController = require('../../src/controllers/task');
const DBManager = require('./dbManager');
const dbman = new DBManager();
const mockTask = require('./mockData/taskData.json');
const mongoose = require('mongoose');

const wrongId = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');
const taskNumber1 = {
  task: 'Go for a walk',
  isCompleted: false,
};

beforeAll(async () => {
  await dbman.start();
});

afterAll(async () => {
  await dbman.stop();
});

describe('Post task - /task', () => {
  it('should post a task correctly', async () => {
    await insertMockTask();
    const result = await TaskController.createTask(taskNumber1);
    expect(result.task).toBe(taskNumber1.task);
  });
});

describe('Patch task - /task/{_id}', () => {
  it('should update a task correctly', async () => {
    const auxTask = await TaskController.getTasks({ limit: 1 });
    const taskUpdate = await TaskController.updateTask(
      { isCompleted: true },
      {
        _id: auxTask[0]._id,
      },
    );
    expect(taskUpdate.task).toBe(
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. ' +
        'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    );
  });

  it('should return an error updating a task (id not exist in db)', async () => {
    const result = await TaskController.updateTask({ isCompleted: true }, { _id: wrongId });
    expect(result).toStrictEqual({ message: 'Task not found' });
  });
});

describe('Delete task - /task/{_id}', () => {
  it('should delete a task from id', async () => {
    const auxTask = await TaskController.getTasks({ limit: 1 });
    const result = await TaskController.deleteTaskById({ _id: auxTask[0]._id });
    expect(result._id).toStrictEqual(auxTask[0]._id);
  });
});

async function insertMockTask() {
  await Task.insertMany(mockTask);
}
