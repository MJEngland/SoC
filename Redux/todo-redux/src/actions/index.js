//uuid generates random ID.
import uuidv4 from 'uuid/v4';

//Exporting and creating addTodo function. Text is the information inputted in the input field.
export const addTodo = text => ({
//Using the add_Todo reducer
    type: 'ADD_TODO',
//Adding 1 to the ID. This will be called in the reducer through action.id
    id: uuidv4(),
//This will add the inputted text into the reducer through action.text
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

//Takes in the item id.
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
//Setting the id of the mapped item to indicate completed or incomplete.
    id
  });

export const clearAllTodos = () => {
  return {
    type: 'CLEAR_TODOS',
  }
}
