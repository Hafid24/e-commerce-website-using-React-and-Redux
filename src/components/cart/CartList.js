import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link,withRouter} from 'react-router';
import {compose} from 'redux';
import CartItem from './CartItem'
import PropTypes from 'prop-types';

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

CartList.propTypes = {
  cart: PropTypes.array
};

const mapStateToProps = state =>{
    return ({
    cart: state.products.cart
  });
  }
  export default compose(
    withRouter,
    connect(mapStateToProps)
  )(CartList);