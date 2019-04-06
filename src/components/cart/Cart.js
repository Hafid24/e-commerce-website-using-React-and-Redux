import React, { Component } from 'react'
import CartColumns from './CartColumns'
import CartList from './CartList'
import { connect } from "react-redux";
import {Link,withRouter} from 'react-router';
import {compose} from 'redux';

class Cart extends Component {
  render() {
    return (
      <section>
        <CartColumns/>
        <CartList/>
      </section>
    )
  }
}
const mapStateToProps = state =>{
  return ({
  cart: state.products.cart,
  });
}
export default compose(
  withRouter,
  connect(mapStateToProps)
)(Cart);