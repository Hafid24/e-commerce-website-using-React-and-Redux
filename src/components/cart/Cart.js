import React, { Component } from 'react'
import CartColumns from './CartColumns'
import CartList from './CartList'
import { connect } from "react-redux";
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom'
import {compose} from 'redux';


class Cart extends Component {
  handleClearCart=()=>{

  }
  getTotal=()=>{
    return 2;
  }
  
  render() {
    return (
      <section>
        <CartColumns/>
        <CartList/>
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
            <Link to= '/'>
            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={this.handleClearCart}>
            clear cart
            </button>
            </Link>
            <h5>
              <span className="text-title">
                total : </span>
                <strong>$ {this.getTotal()}</strong>
            </h5>
            </div>  
          </div>
        </div>

      </section>
    )
  }
}
const mapStateToProps = state =>{
  return ({
  cart: state.products.cart,
  });
}
const mapDispatchToProps = (dispatch)=>{
  return {
      clearCart : ()=> {dispatch({type: 'CLEAR-CART'})}     
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps,mapDispatchToProps)
)(Cart);