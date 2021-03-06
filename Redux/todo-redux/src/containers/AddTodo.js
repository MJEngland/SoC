import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextField from 'material-ui/TextField';

let AddTodo = ({ dispatch }) => {
  let input

const inputStyle = {
  width: fullWidth,
}

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <TextField
          style={inputStyle}
      defaultValue=""
      floatingLabelText="Add your Todo"
      ref={node => {
        input = node
      }}
    />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
