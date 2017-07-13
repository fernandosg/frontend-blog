import{
  GET_BY_ID,GET_ALL
} from '../actions/category/types';
import {
  SPACE_ID,ACCESS_TOKEN
} from '../config.js';

const contentful = require('contentful')
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})
export default function(state=[],action){
  switch (action.type) {
    case GET_ALL:
      getAllCategories();
      return state;
    default:
      return state;
  }
}

function getAllCategories(){
  client.getEntries({
    content_type:"category"
  }).then((response)=>{
    console.dir(response.items);
    response.items;
  }).catch((error)=>{
    console.log("Hubo un error =/");
    console.dir(error);
  })
}
