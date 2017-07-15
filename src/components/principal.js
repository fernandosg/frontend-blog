import React, { Component } from 'react';
import { Link } from 'react-router';
class Principal extends Component{
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
          <article className="post-container row">
            <figure className="img-principal-article col-md-12">
              <img src="img/imagen.jpg"/>
            </figure>
            <div className="col-md-12">
              <h2>Esta seria siendo una nota secundaria</h2>
              <p>Donec nec quam vel elit ultrices gravida ac non lacus. Fusce ut convallis neque, sit amet laoreet est. Pellentessi que maximus, tortor eget aliquam semper, orci ante dignissim mauris.</p>
              <a href="/post/">Leer mas</a>
            </div>
          </article>
        </div>
      </section>
    </section>
    )
  }
}

export default Principal;
