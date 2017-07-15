import{
  GET_LATEST_PRINCIPAL_POST
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
export function getLatestPrincipalPost(){
  const request=client.getEntries({
    content_type:"post",
    "fields.category.sys.contentType.sys.id":"category",
    "fields.category.fields.name[match]":"Principal"
  }).then((response)=>{
    return response.items.map((post)=>{
        return {
          id: post.sys.id,
          title: post.fields.title,
          message:post.fields.message,
          resume_message:post.fields.resumeMessage,
          published_at:post.fields.publishedAt,
          category_name:post.fields.category.fields.name
        }
    })[0];
  }).catch((error)=>{
    console.log("Hubo un error");
  });

return{
  type:GET_LATEST_PRINCIPAL_POST,
  payload:request
}
}
