import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


const AddTodoStyle = styled.div`
    border: 1px #f1f1f1 solid;
    padding: 15px;
    width: 650px;
    margin: 40px auto auto;
    background-color: #f7f7f7c9;

    #todo-name {
      width: 400px;
      background-color: white;
    }

    Button {
      width: 110px;
      margin-left: 5px;
      padding: 7px;
    }
  `

const AddTodo = ({ addTodo }) => {
  const [todoName, setTodoName] = useState('')

  const addToTodoList = name => {
    addTodo(name)
    setTodoName('')
  }

  return (
    <AddTodoStyle>
      <TextField 
        required 
        id="todo-name" 
        label="New to do name" 
        size="small" 
        variant="outlined"

        value={todoName}
        onChange={e => setTodoName(e.target.value)}
      />

      <Button 
        variant="contained" 
        color="primary" 
        size="medium"
        startIcon={<SaveIcon />}
        onClick={() => addToTodoList(todoName)}
      >
        Save
      </Button>
    </AddTodoStyle>
  )
}

export default AddTodo
