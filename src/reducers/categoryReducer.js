import{
  GET_BY_ID,GET_ALL
} from '../actions/category/types';

export default function(state=[],action){
  switch (action.type) {
    case GET_ALL:
      return state;
    default:
      return state;
  }
}
