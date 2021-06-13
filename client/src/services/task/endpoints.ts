import { API_URL } from '../../config';

export const getAllTasksEndpoint = (limit: number) => `${API_URL}/task?limit=${limit}`;

export const updateTaskByIdEndpoint = ({ id }: { id: string }) => `${API_URL}/task/${id}`;
