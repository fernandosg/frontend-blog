import{
  GET_ALL
} from './types';


import {
  SPACE_ID,ACCESS_TOKEN
} from '../../config.js';

const contentful = require('contentful')

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})
export function getAllCategories(){
  const request=client.getEntries({
    content_type:"category"
  }).then((response)=>{
    return response.items.map((category)=>{
      return {
        name:category.fields.name,
        id:category.sys.id
      }
    });
  }).catch((error)=>{
    console.log("Hubo un error");
  })
  return {
    type: GET_ALL,
    payload: request
  }
}
