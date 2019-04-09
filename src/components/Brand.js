import React, { Component } from 'react'
import Product from './Product'
import { connect } from "react-redux";
import {Link,withRouter} from 'react-router-dom';
import {compose} from 'redux';

import Arousel from './Arousel'
import Categories from './Categories'
import Pagination from '../pagination/Pagination'
import '../style/ProductList.css'

let count = 0;

 class ProductList extends Component {
  
  state={
    allProducts:[],
    currentProducts: [], 
    currentPage: null, 
    totalPages: null,
    refresh: true
  }
  componentWillReceiveProps=(nextProps)=>{
    
    this.setState({
        allProducts: nextProps.products
    })
   }
componentDidMount=()=>{
    console.log("brand mounted")
  count=0;
  this.setState({...this.state,refresh:true});
}
 
  
    componentDidUpdate=()=>{
        
      if(((count == 0) && (this.props.products.length >0))){
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
                     <Product id = {product.id} img ={'../'+product.img}/>
                   </div>
              )
      })
      
    ):(<div></div>))
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
    
    const  ProductsList= this.getProducts(this.state.currentProducts);
    
    if (totalProducts === 0) return null;
    console.log("total pages",totalPages,this.props.match.params.brand,totalProducts)
    return (

            <div   key = {this.props.match.params.brand} id="content" class="container">
              <div className="padding-top">
              <div className="row">
                <div className="col-sm-4 col-md-3">
                    <Categories category={this.props.match.params.brand}/>
                </div>
                <div className="col-sm-8 col-md-9">
                  <div className="row">
                    {ProductsList}
                    <div className="col-md-12 align-right">
                    <Pagination  totalRecords={totalProducts} pageLimit={6} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          
    )
  }
}
const mapStateToProps = (state,ownProps) =>{
    let brand = ownProps.match.params.brand;
    const filtered = state.products.products.filter(product => product.company.toLowerCase() == brand.toLowerCase());

  return ({
  products: filteredProducts,
  loading: state.products.loading,
  error: state.products.error
});
}
export default compose(
  withRouter,
  connect(mapStateToProps)
)(ProductList);
//export default withRouter(connect(mapStateToProps)(ProductList));