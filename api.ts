import { atom } from 'jotai'
import axios from "axios";

export const todosAtom = atom<any[]>([])
export const todosId = atom<string>('')

export type Todo = {
  _id: string,
  todoName: string,
  isComplete: boolean
}

export type TodoPost = {
  todoName: string,
  isComplete: boolean
}

export type TodoUpdate = {
  isComplete: boolean
}

const API = axios.create({
  baseURL: 'https://calm-plum-jaguar-tutu.cyclic.app/todos'
})

export const getTodosFn = async () => {
  const res = await API.get('/')
  return res.data
}

export const postTodoFn = async (data: TodoPost) => {
  const res = await API.post('/', data)
  return res.data
}

export const deleteTodoFn = async (id: string) => {
  const res = await API.delete(`/${id}`)
  return res.data
}

export const updateTodoFn = async (id: string, data: TodoUpdate) => {
  const res = await API.put(`/${id}`, data)
  return res.data
}