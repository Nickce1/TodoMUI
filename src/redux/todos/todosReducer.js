import { TODOS_MUI, storage } from '../../constants'
import { ADD_TODO, CHANGE_TODO, DELETE_TODO } from './todosTypes'
import { v4 as uuidv4 } from 'uuid';

const initialState = () => storage[TODOS_MUI]
  ? JSON.parse(storage[TODOS_MUI])
  : []

const todosReducer = (state = initialState(), action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodos = [
        ...state,
        {
          id: uuidv4(),
          name: action.payload,
          completed: false
        }
      ]

      storage[TODOS_MUI] = JSON.stringify(newTodos)

      return (newTodos)
    }

    case CHANGE_TODO: {
      const updatedTodos = state.map(todo => {
        if (todo.id === action.payload) {
          return ({
            ...todo,
            completed: !todo.completed
          })
        }
        else return todo
      })

      storage[TODOS_MUI] = JSON.stringify(updatedTodos)

      return updatedTodos
    }

    case DELETE_TODO: {
      const updatedTodos = state.filter(todo => todo.id !== action.payload)

      storage[TODOS_MUI] = JSON.stringify(updatedTodos)

      return updatedTodos
    } 
    
    default: return state
  }
}

export default todosReducer