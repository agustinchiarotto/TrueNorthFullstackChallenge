import { task } from '../../types';
import { getAllTasksEndpoint, updateTaskByIdEndpoint } from './endpoints';
import { fecthServer } from '../fetchServer';

interface GetAllTasksServiceResponse {
  success: boolean;
  payload: task[];
  error: string;
}

interface updateTaskByIdServiceResponse {
  success: boolean;
  payload: task;
  error: string;
}

export const getAllTasksService = async (
  limit: number = 3,
): Promise<GetAllTasksServiceResponse> => {
  const result = await fecthServer(getAllTasksEndpoint(limit));
  return {
    success: result.success,
    payload: result.payload,
    error: result.error,
  };
};

export const updateTaskByIdService = async ({
  id,
  isCompleted,
}: {
  id: string;
  isCompleted: boolean;
}): Promise<updateTaskByIdServiceResponse> => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({
      isCompleted,
    }),
  };
  const result = await fecthServer(updateTaskByIdEndpoint({ id }), options);
  return {
    success: result.success,
    payload: result.payload,
    error: result.error,
  };
};
