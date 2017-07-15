import { combineReducers } from 'redux';
import postReducer from './postReducer';
import categoryReducer from './categoryReducer';
import principalReducer from './principalReducer';
const rootReducer=combineReducers({
  postReducer:postReducer,
  categoryReducer:categoryReducer,
  principalReducer:principalReducer
});

export default rootReducer;
