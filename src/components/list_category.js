import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/category';
class ListCategory extends Component{

  componentWillMount(){
    this.props.getAllCategories();
  }

  render(){
    return(
      <h1>Lista de categorias</h1>
    )
  }
}

export default connect(null,actions)(ListCategory);
