import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Principal from './components/principal';
import Category from './components/category';
import ListCategory from './components/list_category';
import Post from './components/post';
import About from './components/about';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import promiseMiddleware from 'redux-promise-middleware';
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Principal}/>
        <Route path="/category" component={ListCategory}/> //This is for test, the ListCategory maybe should be in the header or in the sidebar
        <Route path="/category/:category_name" component={Category}/>
        <Route path="/post/:id" component={Post}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
