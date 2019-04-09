import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../style/Categories.css'
import PropTypes from 'prop-types';

export default class Categories extends Component {

  render() {
     const {category} = this.props
    
    return (
      <div className="categories-container">
      <h3>Categories</h3>
            <div class="list-group">
                    <Link to={"/"} className={(category=== 'All') ?  ("list-group-item active"):("list-group-item")}>All</Link>
                    <Link to={"/brand/apple"} className={(category=== 'apple') ?  ("list-group-item active"):("list-group-item")}>Apple</Link>   
                    <Link to={"/brand/google"} className={(category=== 'google') ?  ("list-group-item active"):("list-group-item")}>Google</Link>
                    <Link to={"/brand/htc"} className={(category=== 'htc') ?  ("list-group-item active"):("list-group-item")}>HTC</Link>
                    <Link to={"/brand/samsung"} className={(category=== 'samsung') ?  ("list-group-item active"):("list-group-item")}>Samsung</Link>
            </div>
      </div>
         
    )
  }
}


Categories.propTypes ={
  category : PropTypes.string
}