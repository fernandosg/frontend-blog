import{
  GET_BY_ID,GET_ALL
} from '../actions/category/types';

export default function(state=[],action){
  switch (action.type) {
    case `${GET_ALL}_PENDING`:
      return [];
    case `${GET_ALL}_FULFILLED`:
      return [...state,...action.payload];
    case `${GET_ALL}_REJECTED`:
      return [];
    default:
      return state;
  }
}
