import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Card from '../../components/card/Card';
import LoadingSpinner from '../../components/loadingSpiner/LoadingSpinner';

import { getAllTasksService, updateTaskByIdService } from '../../services/task/task';
import { task } from '../../types';

import styles from './styles.module.css';

const createEmptyState = (): task[] => [];

const Home = () => {
  const [tasks, setTasks] = useState(createEmptyState);
  const [numberOfTask, setNumberOfTask] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  const formSubmitHandler = async () => {
    const result = await getAllTasksService(numberOfTask);
    setTasks(result.payload);
  };

  const updateTaskHandler = async (id: string, isCompleted: boolean) => {
    const result = await updateTaskByIdService({ id, isCompleted });
    if (result.success) {
      let auxTask = tasks.slice(0);
      const index = auxTask.findIndex((task) => task._id === id);
      auxTask[index] = result.payload;
      setTasks(auxTask);
    } else {
      alert('Error on updating task state: ');
    }
  };

  useEffect(() => {
    const fetchTask = async () => {
      const result = await getAllTasksService();
      setTasks(result.payload);
      setIsLoading(false);
    };
    fetchTask();
  }, []);

  const changeHandler = (event: any) => {
    setNumberOfTask(event.target.value);
  };

  if (isLoading || !tasks) {
    return <LoadingSpinner />;
  }
  return (
    <article>
      <section>
        <h1>TASKS LIST</h1>
        <form>
          <TextField
            className={styles.textField}
            id="limit-input"
            label="Number of task"
            name="limit"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            onChange={changeHandler}
          />
          <div className={styles.buttonContainer}>
            <Button variant="contained" size="large" color="primary" onClick={formSubmitHandler}>
              Search
            </Button>
          </div>
        </form>
        <div className={styles.container}>
          {tasks.map((task, index) => {
            return (
              <Card
                title={`Task ${index + 1}`}
                subTitle={task.isCompleted ? 'Completed' : 'Not Completed'}
                text={task.task}
                isCompleted={task.isCompleted}
                updateTaskHandler={updateTaskHandler}
                id={task._id}
                key={task._id}
              />
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default Home;
