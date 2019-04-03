import React, { Component } from 'react'
import {connect} from 'react-redux'

class Details extends Component {
  render() {
    
    return (
      <div>
        <h3>Hello from Details</h3>
      </div>
    )
  }
}


const mapStateToProps = (state,ownProps)=>{
  let id = ownProps.match.params.product_id;
  
  
  return {
      product: state.products.products.find(product => product.id == id)
  }
 }

 export default connect(mapStateToProps)(Details)