import{
  GET_BY_CATEGORY, GET_BY_ID, GET_LATEST_POST
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
export function getAllPostByCategory(category_name){
  const request=client.getEntries({
    access_token:ACCESS_TOKEN,
    content_type:"post",
    include:2,
    "fields.category.sys.contentType.sys.id":"category",
    "fields.category.fields.name[match]":category_name,
    "select":"fields.title,fields.message,fields.resumeMessage,fields.publishedAt,fields.image,fields.category"
  }).then((response)=>{
    if(response.includes!=undefined)
      var image="http://"+response.includes.Asset[0].fields.file.url;
    else
      var image="";
    return response.items.map((post)=>{
      return{
        id:post.sys.id,
        title:post.fields.title,
        message:post.fields.message,
        resume_message:post.fields.resumeMessage,
        published_at:post.fields.publishedAt,
        category_name:post.fields.category.fields.name,
        image:image
      }
    })
  }).catch((error)=>{
    console.log("Hubo un error buscando post por categoria");
    console.dir(error);
  });
  return{
    type: GET_BY_CATEGORY,
    payload: request
  }
}

export function getLatestPost(count_post){
  const request=client.getEntries({
    content_type:"post",
    "select":"fields.title,fields.message,fields.resumeMessage,fields.publishedAt,fields.image,fields.category"
  }).then((response)=>{
    let image="http://"+response.includes.Asset[0].fields.file.url;
    return response.items.map((post)=>{
        return {
          id: post.sys.id,
          title: post.fields.title,
          message:post.fields.message,
          resume_message:post.fields.resumeMessage,
          published_at:post.fields.publishedAt,
          category_name:post.fields.category.fields.name,
          image:image
        }
    })
  }).catch((error)=>{
    console.log("Hubo un error");
  });

  return{
    type:GET_LATEST_POST,
    payload:request
  }
}


export function getPostById(post_id){
  const request=client.getEntries({
    access_token:ACCESS_TOKEN,
    content_type:"post",
    "sys.id":post_id
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
