import React, { Component } from 'react';

class Post extends Component{
  render(){
    return(
      <article>
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
        <b>{this.props.publishedAt}</b>
      </article>
    )
  }
}

export default Post;
