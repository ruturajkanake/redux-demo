import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'

const ADD = 'ADD'

const messageReducer = (state = [], action)=>{
  switch(action.type){
    case ADD:
      return [...state, action.message];
    default:
      return state
  }
}

const store = createStore(messageReducer)

ReactDOM.render(
  <App store = {store}/>,
  document.getElementById('root')
);
