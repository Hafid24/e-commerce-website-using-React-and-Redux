import React, { Component } from 'react'
import Product from './Product'
import { connect } from "react-redux";
import {Link,withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Categories from './Categories'
import Pagination from '../pagination/Pagination'
import '../style/ProductList.css'
import PropTypes from 'prop-types';

let count = 0;
 class ProductList extends Component {
  
  state={
    allProducts:[],
    currentProducts: [], 
    currentPage: null, 
    totalPages: null,
    refresh: true
  }
componentDidMount=()=>{
  count=0;
  this.setState({refresh:true});
}
 
  
    componentDidUpdate(){
      if((count == 0) && (this.props.products.length >0)){
        this.setState({
          allProducts: this.props.products
        })
      
      count++;
      }
 
    }
 

  getProducts(products){
    if(count!=0){
    return (products.length? (
      products.map(product => {
              return(
                   <div class="col-sm-6 col-md-4">
                     <Product id = {product.id} img={product.img}/>
                   </div>
              )
      })
      
    ):(<div></div>)
    }else { return (<h3>There is no product</h3>)}
  }

  onPageChanged = data => {
    const { allProducts } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = allProducts.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentProducts, totalPages });
  }

  render() {
    const { allProducts, currentProducts, currentPage, totalPages } = this.state;
    const totalProducts = allProducts.length;
    
    if (totalProducts === 0) return (
      <div   key = {this.props.match.params.brand} id="content" class="container">
        <div className="padding-top">
        <div className="row">
          <div className="col-sm-4 col-md-3">
              <Categories p = {this.props}  category={this.props.match.params.brand}/>
          </div>
          <div className="col-sm-8 col-md-9">
            <div className="row">
            
              <div className="col-md-12 align-right">
              <Pagination  totalRecords={totalProducts} pageLimit={6} pageNeighbours={1} onPageChanged={this.onPageChanged} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>     );
    const  ProductsList= this.getProducts(this.state.currentProducts);
    
    return (

            <div id="content" class="container">
              <div className="padding-top">
              <div className="row">
                <div className="col-sm-4 col-md-3">
                    <Categories category="All"/>
                </div>
                <div className="col-sm-8 col-md-9">
                  <div className="row">
                    {ProductsList}
                    <div className="col-md-12 align-right">
                    <Pagination totalRecords={totalProducts} pageLimit={6} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          
    )
  }
}
ProductList.propTypes = {
  products: PropTypes.array
};

const mapStateToProps = state =>{
  return ({
  products: state.products.products
});
}
export default compose(
  withRouter,
  connect(mapStateToProps)
)(ProductList);
//export default withRouter(connect(mapStateToProps)(ProductList));
