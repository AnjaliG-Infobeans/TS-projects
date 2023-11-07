import { DeleteTodosAction, FetchTodosAction } from "./todos";

export enum ActionTypes {
  // default: numbers starting from 0
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodosAction;