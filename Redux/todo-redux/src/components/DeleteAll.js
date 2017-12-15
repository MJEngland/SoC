import React from 'react';
import {connect} from 'react-redux';
import { clearAllTodos} from '../actions'
import RaisedButton from 'material-ui/RaisedButton';

const style ={
  margin: 12,
}

let DeleteAll = ({dispatch}) => {
  return (
    <form>
      <RaisedButton label="Delete All" secondary={true} style={style} onClick={(e) => {
        e.preventDefault();
        dispatch(clearAllTodos());
      }
    }
  />
    </form>
  )
}
DeleteAll = connect()(DeleteAll)

export default DeleteAll;
