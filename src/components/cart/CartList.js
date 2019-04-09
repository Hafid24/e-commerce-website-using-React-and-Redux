import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link,withRouter} from 'react-router';
import {compose} from 'redux';
import CartItem from './CartItem'

 class CartList extends Component {
  render() {
    return (
      <div className="container-fluid">
            { this.props.cart.map(item=>{
                return(
                        <CartItem id = {item.id} reRender = {this.props.reRender}/>
                )
            })}
      </div>
    )
  }
}
const mapStateToProps = state =>{
    return ({
    cart: state.products.cart
  });
  }
  export default compose(
    withRouter,
    connect(mapStateToProps)
  )(CartList);