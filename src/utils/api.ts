import request from "./request";
import { Todo, User } from "./types";

const todos = {
  list: () => request.get<Todo[]>('/todos'),
  detail: (id: string) => request.get<Todo>(`/todos/${id}`),
  create: (data: Todo) => request.post<void>('/todos', data),
};

const users = {
  list: () => request.get<User[]>('/users'),
  detail: (id: number) => request.get<User>(`/users/${id}`),
  create: (data: User) => request.post<User>('/users', data),
};

const Api = {
  todos,
  users,
};

export default Api;