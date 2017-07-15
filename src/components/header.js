import React, { Component } from 'react';
import logo from '../logo.svg';
import ListCategory from './list_category';
class Header extends Component{
  render(){
    return(
      <header>
        <div className="logo-wrapper">
          <h1 className="text-brand">Fernando Segura</h1>
        </div>
        <ListCategory/>
      </header>
    )
  }
}

export default Header;
