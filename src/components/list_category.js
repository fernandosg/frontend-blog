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
      const path="/category/"+category.name;
      return(
        <li key={category.id}>
          <Link to={path}>{category.name}</Link>
        </li>
      )
    })
  }

  render(){
    return(
      <nav className="menu-header">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {this.getListCategories()}
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return{
    categories:state.categoryReducer
  }
}

export default connect(mapStateToProps,actions)(ListCategory);
