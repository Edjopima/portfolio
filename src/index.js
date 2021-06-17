import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router} from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  projects: [{title:'',description:'Example description'}],
  iotProjects:[],
  webProjects:[]
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PROJECTS':{
      return {...state, projects:action.payload}
      }
    case 'SET_IOT_PROJECTS':
      return {...state, iotProjects:action.payload}
    case 'SET_WEB_PROJECTS':
      return {...state, webProjects:action.payload}
    default:
      return state
  }
}

const store = createStore(reducer,initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
