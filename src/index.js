import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
// import allReducer from './reducers'

// const store = createStore(
//   counter
//   \, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


// // Action -> Name of what you want to do  e.g. Increment
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//-------------------------------------------------------------

// // Reducer -> How to modift Store
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      break;
  }
};

//-----------------------------------------------------------------

// //Store -> Globalized State
let store = createStore(counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// //Display it in the console
store.subscribe(() => console.log(store.getState()))


// // Dispatch -> Launch 
store.dispatch(increment());  //+ 1
store.dispatch(increment());  //+ 1
store.dispatch(increment());  //+ 1
store.dispatch(increment());  //+ 1
store.dispatch(increment());  //+ 1
store.dispatch(decrement());  //- 1
store.dispatch(decrement());  //- 1

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
