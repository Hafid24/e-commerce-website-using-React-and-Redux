import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router';
import {compose} from 'redux';
import '../../App.css'


 class CartItem extends Component {
    state={

    }
    handleRemoveItem=()=>{

    }
    handleDecrement=()=>{

    }
    handleIncrement=()=>{
         
    }

  render() {
      const {id,title,img,price,total,count} = this.props.product;
     console.log(this.props.product)
    return (
      <div className="row my-1 text-capitalize text-center">
      <div className="col-sm-2 col-md-2 mx-auto col-lg-2">
            <img src={img} alt="" style={{width:'5rem',height:'5rem'}} className= "img-fluid"/>
      </div>
      <div className="col-sm-2 col-md-2 mx-auto col-lg-2">
            {title}
      </div>
      <div className="col-sm-2 col-md-2 mx-auto col-lg-2">
            <span>${price}</span>
      </div>
      <div className="col-sm-2 col-md-2 mx-auto col-lg-2">
        <div className="d-flex justify-content-center">
            <div>
                <span className="btn btn-black mx-" onClick={this.handleDecrement}>-</span>
                <span className="btn btn-black mx-1">{count}</span>
                <span className="btn btn-black mx-" onClick={this.handleIncrement}>+</span>
            </div>
        </div>
      </div>
      <div className="col-sm-2 col-md-2 mx-auto col-lg-2">
           <div className="cart-item" onClick={this.handleRemoveItem}>
               <i className="cart-icon fas fa-trash"></i>
           </div>
      </div>
      <div className="col-sm-2 col-md-2 mx-auto col-lg-2">
            <span>${total}</span>
      </div>

      </div> 
    )
  }
}

const mapStateToProps = (state,ownProps)=>{
    let id = ownProps.id;
    return {
        product: state.products.cart.find(product => product.id == id)
    }
   }
  export default compose(
    withRouter,
    connect(mapStateToProps)
  )(CartItem);