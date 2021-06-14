const config = require('../../config');
const fetch = require('node-fetch');

const getTasksFromExternalAPI = async (numberOfTasks) => {
  let tasks;
  try {
    const fetchResult = await fetch(
      `${config.HIPSUM_API_URL}?type=hipster-centric&sentences=${numberOfTasks}`,
    );
    const result = await fetchResult.json();
    let mapedTasks = [];
    if (result) {
      mapedTasks = result[0].split('. ');
    }
    mapedTasks = mapedTasks.map((task) => ({
      task: task,
      isCompleted: false,
    }));
    return mapedTasks;
  } catch (error) {
    console.error(`There was an error with the external API: ${error}`);
  }
  return tasks;
};

module.exports = { getTasksFromExternalAPI };
