import { ADD_TODO, CHANGE_TODO, DELETE_TODO } from "./todosTypes";

export const addTodo = todoName => ({
  type: ADD_TODO,
  payload: todoName
})

export const changeTodo = id => ({
  type: CHANGE_TODO,
  payload: id
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
})