import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/post';
import { Link } from 'react-router';
class Post extends Component{

  constructor(){
    super();
    this.handleContentOfPost=this.handleContentOfPost.bind(this);
    this.getLayoutPost=this.getLayoutPost.bind(this);
  }

  componentWillMount(){
    if(this.props.preview==undefined)
      this.props.getPostById(this.props.id);
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

  getLayoutPost(){
    if(this.props.preview==true){
      let path="/post/"+this.props.id;
      return <article>
        <h1>
          <Link to={path}>{this.props.title}</Link>
        </h1>
        <p>{this.props.resume_message}</p>
        <b>{this.props.published_at}</b>
      </article>
    }else if(this.props.posts.length>0){
      return <article>
        <h1>{this.props.posts[0].title}</h1>
        <p>{this.props.posts[0].message}</p>
        <b>{this.props.posts[0].published_at}</b>
      </article>
    }else{
      <article></article>
    }
  }

  render(){
    return(
      <article>
        {this.getLayoutPost()}
      </article>
    )
  }
}

function mapStateToProps(state){
  return{
    posts:state.postReducer
  }
}

export default connect(mapStateToProps,actions)(Post);
