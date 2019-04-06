import React, { Component } from 'react'

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-md-block d-lg-block">
        <div className="col-sm-2 col-md-2 mx-auto col-lg-2">
            <p className="text-uppercase">Products</p>
        </div>
        <div className=" col-sm-2 col-md-2 mx-auto col-lg-2">
            <p className="text-uppercase">name of product</p>
        </div>
        <div className="col-sm-2 col-md-2 mx-auto col-lg-2">
            <p className="text-uppercase">price</p>
        </div>
        <div className="col-sm-2 col-md-2 mx-auto col-lg-2">
            <p className="text-uppercase">quantity</p>
        </div>
        <div className="col-sm-2 col-md-2 mx-auto col-lg-2">
            <p className="text-uppercase">remove</p>
        </div>
        <div className="col-sm-2 col-md-2 mx-auto col-lg-2">
            <p className="text-uppercase">total</p>
        </div>
      </div>
    )
  }
}
