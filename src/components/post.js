import React, { Component } from 'react';

class Post extends Component{

  constructor(){
    super();
    this.handleContentOfPost=this.handleContentOfPost.bind(this);
  }

  handleContentOfPost(){
    if(this.props.preview==undefined){
      return(
        <p>{this.props.message}</p>
      )
    }else{
      return(
        <p>{this.props.resume_message}</p>
      )
    }
  }

  render(){
    return(
      <article>
        <h1>{this.props.title}</h1>
        {this.handleContentOfPost()}
        <b>{this.props.published_at}</b>
      </article>
    )
  }
}

export default Post;
