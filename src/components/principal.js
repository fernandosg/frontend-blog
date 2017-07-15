import React, { Component } from 'react';
import { Link } from 'react-router';
import * as principalActions from '../actions/principal';
import * as postsActions from '../actions/post';
import Post from './post';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
class Principal extends Component{

  constructor(){
    super();
    this.displayLatestPost=this.displayLatestPost.bind(this);
    this.displayLatestPrincipalPost=this.displayLatestPrincipalPost.bind(this);
  }

  componentWillMount(){
    this.props.actions.postsActions.getLatestPost(5);
    this.props.actions.principalActions.getLatestPrincipalPost();
  }

  displayLatestPost(){
    if(this.props.posts.length!=undefined){
      return this.props.posts.map((post)=>{
        let path="/post/"+post.id
        return (<article key={post.id} className="post-container row">
          <figure className="img-principal-article col-md-12">
            <img src={post.image}/>
          </figure>
          <div className="col-md-12">
            <h2>{post.title}</h2>
            <p>{post.message}</p>
            <Link to={path}>Leer mas</Link>
          </div>
        </article>)
      })
    }
  }

  displayLatestPrincipalPost(){
    return (<article className="principal-container col-md-12">
      <div className="row">
        <figure className="img-principal-article col-md-5">
          <img src={this.props.principal.image}/>
        </figure>
        <div className="col-md-7">
          <h2>{this.props.principal.title}</h2>
          {this.props.principal.resume_message}
        </div>
      </div>
    </article>);
  }

  render(){
    return(
    <section className="row">
      {this.displayLatestPrincipalPost()}
      <section className="row">
        <aside className="about-me col-md-4">
          <h3>Acerca de mi</h3>
          <img className="profile_picture" src="img/profile_picture.jpg"/>
          <p>Mi nombre es Fernando Segura, programador freelance para web (principalmente backend) y móvil en plataformas android</p>
          <Link to="/about">Leer mas</Link>
        </aside>
        <div className="col-md-8">
          {this.displayLatestPost()}
        </div>
      </section>
    </section>
    )
  }
}

function mapStateToProps(state){
  return{
    posts:state.postReducer,
    principal:state.principalReducer
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions:{
      principalActions: bindActionCreators(principalActions,dispatch),
      postsActions: bindActionCreators(postsActions,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Principal);
