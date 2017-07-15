import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <footer className="principal row">
        <div className="col-md-12 copyright-info">
          Página hecha con <a href="https://facebook.github.io/react/">
          <img className="icon-tool" src="/img/reactjsicon.png"/></a> y
          <a href="http://redux.js.org"><img className="icon-tool" src="/img/reduxicon.png"/></a>. Hospedada en <a href="https://github.com/fernandosg/fernandosg.github.io"><img src="/img/githubicon.png" className="icon-tool" /></a>
        </div>
      </footer>
    )
  }
}

export default Footer;
