import React, { Component } from 'react';
import logo from '../logo.svg';
import ListCategory from './list_category';
class Header extends Component{
  render(){
    return(
      <div className="App-header" style={{marginBottom:10}}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <ListCategory />
      </div>
    )
  }
}

export default Header;
