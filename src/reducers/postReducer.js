import{
  GET_BY_CATEGORY, GET_BY_ID, GET_LATEST_POST
} from '../actions/post/types';

export default function(state={},action){
  switch(action.type){
    case `${GET_BY_CATEGORY}_FULFILLED`:
      if(action.payload.length>0)
        return [...state,...action.payload];
      else
        return [];
    case `${GET_BY_CATEGORY}_REJECTED`:
      return [];
    case `${GET_BY_ID}_FULFILLED`:
      return [action.payload];
    case `${GET_LATEST_POST}_FULFILLED`:
      return action.payload;
    default:
      return state;
  }
}
