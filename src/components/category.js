import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post';
import * as actions from "../actions/post";

class Category extends Component{
  constructor(){
    super();
    this.getPosts=this.getPosts.bind(this);
  }
  componentWillMount(){
    this.props.getAllPostByCategory(this.props.params.category_name);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.category_name!=nextProps.params.category_name)
      this.props.getAllPostByCategory(nextProps.params.category_name);
  }

  getPosts(){
    if(this.props.posts.length>0){
      return this.props.posts.map((post)=>{
        return(
          <Post post_id={post.id} title={post.title}
            message={post.message}
            image={post.image}
            resume_message={post.resume_message}
            published_at={post.published_at}
            preview={true} key={post.id} />
        )
      })
    }
  }


  render(){
    return(
      <div id={this.props.params.category_name} key={this.props.params.category_name}>
        <h1 id="title_category">{this.props.params.category_name}</h1>
        {this.getPosts()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    posts:state.postReducer
  }
}

export default connect(mapStateToProps,actions)(Category);
