import React from 'react'
import { Checkbox, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { changeTodo, deleteTodo } from '../redux/reduxActions'

const TodoListStyles = styled.div`
    width: 35%;
    margin: 40px auto;
  `

const TodoList = () => {
  const todos = useSelector(state => state)
  const dispatch = useDispatch()

  const nameStyle = (todoState) => todoState 
    ? {
      textDecoration: "line-through"
    } : {
      textDecoration: "none"
    }

  const listItems = todos.map (todo => (
    <ListItem key={todo.id} button>
      <ListItemText style={nameStyle(todo.completed)} primary={todo.name} />
      <ListItemIcon>
        <Checkbox
          edge="start"
          tabIndex={-1}
          disableRipple
          checked={todo.completed}
          onClick={() => dispatch(changeTodo(todo.id))}
        />
        <IconButton edge="end" onClick={() => dispatch(deleteTodo(todo.id))}>
          <Delete />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  ))

  return (
    <TodoListStyles>
      <List dense>
        {listItems}
      </List>
    </TodoListStyles>
  )
}

export default TodoList