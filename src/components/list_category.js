import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/category';
class ListCategory extends Component{

  constructor(){
    super();
    this.getListCategories=this.getListCategories.bind(this);
  }

  componentWillMount(){
    this.props.getAllCategories();
  }

  getListCategories(){
    return this.props.categories.map((category)=>{
      const path="/category/"+category.id;
      return(
        <li key={category.id}>
          <Link to={path}>{category.name}</Link>
        </li>
      )
    })
  }

  render(){
    return(
      <div>
        <h1>Lista de categorias</h1>
        <ul>
          {this.getListCategories()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    categories:state.categoryReducer
  }
}

export default connect(mapStateToProps,actions)(ListCategory);
