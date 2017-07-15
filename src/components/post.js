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
      this.props.getPostById(this.props.post_id);
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
      let path="/post/"+this.props.post_id;
      return <article className="col-md-12">
        <h1>
          <Link to={path}>{this.props.title}</Link>
        </h1>
        <span className="post-publish-date">{this.props.published_at}</span>
        {this.props.resume_message}
      </article>
    }else if(this.props.posts.length>0){
      return <article className="col-md-12">
        <h1>{this.props.posts[0].title}</h1>
        <span className="post-publish-date">{this.props.posts[0].published_at}</span>
        {this.props.posts[0].message}
      </article>
    }else{
      <article className="col-md-12"></article>
    }
  }

  render(){
    return(
      <div className="col-md-10 center container-single-post">
        <figure className="img-principal-article col-md-12">
          <img src="img/imagen.jpg"/>
        </figure>
          {this.getLayoutPost()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    posts:state.postReducer
  }
}

export default connect(mapStateToProps,actions)(Post);
