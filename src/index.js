import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Category from './components/category';
import Post from './components/post';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/category/:id" component={Category}/>
      <Route path="/post/:id" component={Post}/>
    </Route>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
