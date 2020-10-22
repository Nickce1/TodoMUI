import React from 'react'
import { Checkbox, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import styled from 'styled-components'

const TodoListStyles = styled.div`
    width: 35%;
    margin: 40px auto;
  `

const TodoList = ({ todos, changeStatus, deleteTodo }) => {
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
          onClick={() => changeStatus(todo.id)}
        />
        <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
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