import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/post';
import { Link } from 'react-router';
import ReactDisqusThread from 'react-disqus-thread';
class Post extends Component{

  constructor(){
    super();
    this.handleContentOfPost=this.handleContentOfPost.bind(this);
    this.getLayoutPost=this.getLayoutPost.bind(this);
  }

  componentWillMount(){
    if(this.props.preview===undefined){
      if(this.props.params.id===undefined)
        this.props.getPostById(this.props.post_id);
      else
        this.props.getPostById(this.props.params.id);
    }
  }

  handleContentOfPost(){
    if(this.props.preview===undefined){
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
    if(this.props.preview===true){
      let path="/post/"+this.props.post_id;
      return <article className="col-md-12">
        <figure className="img-principal-article col-md-12">
          <img alt="" src={this.props.image}/>
        </figure>
        <h1>
          <Link to={path}>{this.props.title}</Link>
        </h1>
        <span className="post-publish-date">{this.props.published_at}</span>
        <div className="content-linebreak" dangerouslySetInnerHTML={{__html: this.props.resume_message}}></div>
      </article>
    }else if(this.props.posts.length>0){
      return <article className="col-md-12">
        <figure className="img-principal-article col-md-12">
          <img alt="" src={this.props.posts[0].image}/>
        </figure>
        <h1>{this.props.posts[0].title}</h1>
        <span className="post-publish-date">{this.props.posts[0].published_at}</span>
        <div className="content-linebreak" dangerouslySetInnerHTML={{__html: this.props.posts[0].message}}></div>
      </article>
    }else{
      return <article className="col-md-12"></article>;
    }
  }

  showDisqusComment(){
    if(this.props.preview===undefined && this.props.posts[0]!==undefined){
      let path="http://fernandosg.github.io/post/"+this.props.posts[0].id
      return(
        <ReactDisqusThread
				shortname="fernandosegom"
				identifier={this.props.posts[0].id}
				title={this.props.posts[0].title}
				url={path}/>
      )
    }
  }

  render(){
    return(
      <div className="col-md-10 center container-single-post">
        {this.getLayoutPost()}
        {this.showDisqusComment()}
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
