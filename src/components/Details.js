import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ButtonContainer} from './Button'
import PropTypes from 'prop-types';

class Details extends Component {
    state={
      empty:[]
    }

  doNothing=()=>{
    this.props.nothing();
    this.setState({
      ...this.state
    })
    this.props.history.push('/')
    
  }
  addToCart=()=>{
   this.props.addCart(this.props.product.id)
   this.setState({
     ...this.state
   })
  }
  render() {
      const {id, company, img , info, price, title,inCart } = this.props.product;
    return (
      <div className="container py-5">
        <div className="row">
           <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
            </div>  
        </div>
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 ">
            <img src= {'../'+ img}  className="img-fluid" alt="product"/>
          </div>
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h1>modal : {title}</h1>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2 ">
               Made by : <span className="text-uppercase">{company}</span>
            </h4>
            <h4 className="text-blue">
              <strong>
              price : <span>$</span>{price}
              </strong> 
            </h4>
             <p className="text-capitalize font-weight-bold mt-3 mb-0">
               <strong> Information about the product : </strong>
             </p>
             <p className="text-muted lead">
               {info}
             </p>
             <div>
                         
               <ButtonContainer onClick={this.doNothing}>Back to products</ButtonContainer>
               
               <ButtonContainer cart disabled={inCart?true:false} onClick={this.addToCart}>{inCart?"in cart":"add to cart"}</ButtonContainer>
             </div>
          </div> 
        </div>
      </div>
    )
  }
 }

 Details.propTypes ={
  product : PropTypes.object,
  addCart : PropTypes.func,
  nothing : PropTypes.func
}

const mapStateToProps = (state,ownProps)=>{
  let id = ownProps.match.params.product_id;
  return {
      product: state.products.products.find(product => product.id == id)
  }
 }
 const mapDispatchToProps = (dispatch)=>{
  return {
      addCart : (id)=> {dispatch({type: 'ADD_CART', id:id})},
      nothing : ()=>{dispatch({type: 'NOTHING'})}
  }

}

 export default connect(mapStateToProps,mapDispatchToProps)(Details)