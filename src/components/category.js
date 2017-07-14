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
    this.props.getAllPostByCategory(this.props.params.id);
  }

  getPosts(){
    if(this.props.posts.length>0){
      return this.props.posts.map((post)=>{
        return(
          <Post id={post.id} title={post.title}
            message={post.message}
            resume_message={post.resume_message}
            published_at={post.published_at}
            preview={true} key={post.id} />
        )
      })
    }
  }

  componentDidUpdate(){
    document.getElementById("title_category").innerHTML=this.props.posts[0].category_name;
  }

  render(){
    return(
      <div>
        <h1 id="title_category"></h1>
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
