import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {loadState, saveState} from '../localStorage'
import {createStore} from 'redux'
import todoApp from '../reducers'
import DeleteAll from './DeleteAll'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarIcon from './AppBar'

const persistedState = loadState();
const store = createStore(
  todoApp,
  persistedState
);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

const App = () => (
  <div>
    <MuiThemeProvider>
      <AppBarIcon />
      <AddTodo />
      <VisibleTodoList />
      <DeleteAll />
      <Footer />
    </MuiThemeProvider>
  </div>
)

export default App
