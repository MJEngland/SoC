//Creates a const todos which has an initial state of an empty array. And takes in an action.
const todos = (state = [], action) => {
//Awaits to know what action is being called.
  switch (action.type) {
//When action Add_Todo is called.
    case 'ADD_TODO':
      return [
//Take in the current state
        ...state,
        {
//add new todo with the id+1 whatever the nextTodoId is.
          id: action.id,
//adds the text inputted. Which is processed in the action.
          text: action.text,
//Completed is set to false, becuase a new action would not be completed.
          completed: false
        }
      ]
//If the action TOGGLE_TODO has been called.
    case 'TOGGLE_TODO':
//Map through the current state. If todo ID matches toggle id. Change the to completed from false to true.
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
      case 'CLEAR_TODOS':
        return []
        default:
        return state
    }
}

export default todos
