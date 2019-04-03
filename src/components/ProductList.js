import React, { Component } from 'react'
import Product from './Product'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import { fetchProducts } from "../actions/productActions";
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
    totalPages: null
  }

  componentDidMount() {
  this.props.dispatch(fetchProducts());
  }
  componentWillReceiveProps(){
    count=0;
  }
  
    componentDidUpdate(){
      if((count == 0) && (this.props.products.length >0)){
        this.setState({
          allProducts: this.props.products
        })
        
      count++;
      }
      console.log(this.state.allProducts)
    }
 

  getProducts(products){
    if(count!=0){
    return (products.length? (
      products.map(product => {
              return(
                   <div class="col-sm-6 col-md-4">
                     <Product id = {product.id} title= {product.title} price = {product.price} img={product.img} company={product.company}
                     info = {product.info} inCart = {product.inCart} count = {product.count} total={product.total}/>
                   </div>
              )
      })
      
    ):(<h3>HEllo from product</h3>))
    }else { return (<h3>HEllo from product</h3>)}
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

    if (totalProducts === 0) return null;

    const  ProductsList= this.getProducts(this.state.currentProducts);
    return (

            <div id="content" class="container">
              <Arousel/>
              <div className="padding-top">
              <div className="row">
                <div className="col-sm-4 col-md-3">
                    <Categories/>
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
const mapStateToProps = state =>{
  console.log(state);
  return ({
  products: state.products.products,
  loading: state.products.loading,
  error: state.products.error
});
}

export default connect(mapStateToProps)(ProductList)