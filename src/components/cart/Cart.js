import React, { Component } from 'react'
import CartColumns from './CartColumns'
import CartList from './CartList'
import { connect } from "react-redux";
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom'
import {compose} from 'redux';
import PropTypes from 'prop-types';

class Cart extends Component {
  state={

  }
  handleClearCart=()=>{
    this.props.clearCart();
  }
  reRender = ()=>{
   this.setState({ ...this.state})
  }


  getTotal=()=>{
    var total=0;
    for(var product of this.props.cart){
      total += product.total;
    }
    return total;
  }
  
  render() {
    return (
      <section>
        <CartColumns/>
        <CartList reRender = {this.reRender}/>
        <div className="container">
          <div className="row">
            <div className="col-10 mt-6 marging-top ml-sm-5 ml-md-auto text-capitalize text-right">
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
{ /*           <PayPalButton total={this.getTotal()} clearCart={this.handleClearCart} history={this.props.history}/> */}            </div>  
          </div>
        </div>

      </section>
    )
  }
}

Cart.propTypes = {
  cart: PropTypes.array,
  clearCart: PropTypes.func
};

const mapStateToProps = state =>{
  return ({
  cart: state.products.cart,
  });
}
const mapDispatchToProps = (dispatch)=>{
  return {
      clearCart : ()=> {dispatch({type: 'CLEAR_CART'})}     
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps,mapDispatchToProps)
)(Cart);