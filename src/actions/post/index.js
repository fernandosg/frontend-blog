import{
  GET_BY_CATEGORY, GET_BY_ID
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
export function getAllPostByCategory(category){
  const request=client.getEntries({
    access_token:ACCESS_TOKEN,
    content_type:"post",
    "fields.category.sys.contentType.sys.id":category
  }).then((response)=>{
    return response.items.map((post)=>{
      return{
        id:post.sys.id,
        title:post.fields.title,
        message:post.fields.message,
        resume_message:post.fields.resumeMessage,
        published_at:post.fields.publishedAt,
        category_name:post.fields.category.fields.name
      }
    })
  }).catch((error)=>{
    console.log("Hubo un error buscando post por categoria")
  });
  return{
    type: GET_BY_CATEGORY,
    payload: request
  }
}

export function getPostById(post_id){
  const request=client.getEntries({
    access_token:ACCESS_TOKEN,
    content_type:"post",
    "fields.contentType.sys.Id":post_id
  }).then((response)=>{
    return{
      id:response.items[0].sys.id,
      title:response.items[0].fields.title,
      message:response.items[0].fields.message,
      resume_message:response.items[0].fields.resumeMessage,
      published_at:response.items[0].fields.publishedAt,
      category_name:response.items[0].fields.category.fields.name
    }
  }).catch((error)=>{
    console.log("Hubo un error buscando post por categoria")
  });
  return{
    type: GET_BY_ID,
    payload: request
  }
}
