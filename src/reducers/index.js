import { combineReducers } from 'redux';
import postReducer from './postReducer';
import categoryReducer from './categoryReducer';
const rootReducer=combineReducers({
  postReducer:postReducer,
  categoryReducer:categoryReducer
});

export default rootReducer;
