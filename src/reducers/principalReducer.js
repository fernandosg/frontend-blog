import {GET_LATEST_PRINCIPAL_POST} from '../actions/principal/types';

export default function(state={},action){
  switch(action.type){
    case `${GET_LATEST_PRINCIPAL_POST}_FULFILLED`:
      return action.payload;
    default:
      return state;
  }
}
