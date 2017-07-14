import{
  GET_BY_CATEGORY, GET_BY_ID
} from '../actions/post/types';

export default function(state={},action){
  switch(action.type){
    case `${GET_BY_CATEGORY}_FULFILLED`:
      return [...state,...action.payload];
    default:
      return state;
  }
}
