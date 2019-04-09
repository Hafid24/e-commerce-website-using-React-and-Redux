import React, { Component } from 'react'
import '../style/Product.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

 class Product extends Component {
  state={

  }
  

  handlePlusClick = (e)=>{
    this.props.addCart(this.props.id)
    this.setState({
      ...this.state
    })

  }
  render() {
    let {id,title , price, company, info, inCart, count , total} = this.props.product;  
   
    return (
      <div>
      <div class="thumbnail">
      <Link to ={'/details/'+ id}>
          <img className= "size" src= {this.props.img} alt=""/>
      </Link>
            <div class="add-to-cart">
              {inCart? (<i class="glyphicon glyphicon-plus-sign plus-sign red" onClick={this.handlePlusClick}
                data-toggle="tooltip" data-placement="top" title="Add to cart"></i>):(<i  class="glyphicon glyphicon-plus-sign plus-sign blue" onClick={this.handlePlusClick}
                data-toggle="tooltip" data-placement="top" title="Add to cart"></i>)}
                
            </div>
            <div class="caption">
              <h4 class="pull-right">${price}</h4>
              <h4><a href="product.html">{title}</a>
              </h4>
              <p>This is a short description. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.</p>
                  <div class="ratings">
                      <p class="pull-right"><a href="">15 reviews</a></p>
                      <p>
                      <span class="glyphicon glyphicon-star"></span>
                      <span class="glyphicon glyphicon-star"></span>
                      <span class="glyphicon glyphicon-star"></span>
                      <span class="glyphicon glyphicon-star"></span>
                      <span class="glyphicon glyphicon-star"></span>
                      </p>
                  </div>
            </div>
        </div>
      </div>
    )
  }
}
Product.propTypes = {
  product: PropTypes.object,
  addCart: PropTypes.func
};

const mapStateToProps = (state, ownProps) =>{
  let id = ownProps.id;
  return ({
    product: state.products.products.find(product => product.id == id)
 });
}

const mapDispatchToProps = (dispatch)=>{
  return {
      addCart : (id)=> {dispatch({type: 'ADD_CART', id:id})}
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Product)