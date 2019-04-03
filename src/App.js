import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Default from './components/Default'
import Details from './components/Details'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
 state = {
   
 }
 
 
  render() {
    return (
          <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={ProductList}/>
                <Route  path="/cart" component={Cart}/>
                <Route  path="/details/:product_id" component={Details}/>
                <Route  component={Default}/>
            </Switch>

            <Footer/>  
          
          </React.Fragment>
    )
  }
}

export default App;
