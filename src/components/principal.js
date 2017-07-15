import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions/post';
import Post from './post';
import { connect } from 'react-redux';
class Principal extends Component{

  constructor(){
    super();
    this.displayLatestPost=this.displayLatestPost.bind(this);
  }

  componentWillMount(){
    this.props.getLatestPost(5);
  }

  displayLatestPost(){
    if(this.props.posts.length!=undefined){
      return this.props.posts.map((post)=>{
        let path="/post/"+post.id
        return (<article key={post.id} className="post-container row">
          <figure className="img-principal-article col-md-12">
            <img src="img/imagen.jpg"/>
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

  render(){
    return(
    <section className="row">
      <article className="principal-container col-md-12">
        <div className="row">
          <figure className="img-principal-article col-md-5">
            <img src="img/imagen.jpg"/>
          </figure>
          <div className="col-md-7">
            <h2>Esta seria siendo una nota principal</h2>
          </div>
        </div>
      </article>
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
    posts:state.postReducer
  }
}

export default connect(mapStateToProps,actions)(Principal);
