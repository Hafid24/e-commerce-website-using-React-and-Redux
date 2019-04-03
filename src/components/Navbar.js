import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import loginModal from './loginModal'

 export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse bg-primary navbar-expand-sm navbar-dark px-sm-5">
        <loginModal/>
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to = "/" className="navbar-brand">Store</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active nav-item ml-5"><Link to={"#"}>Home</Link></li>
            <li className="dropdown nav-item ml-5">
              <Link  to={"#"} className="dropdown-toggle" data-toggle = "dropdown">Categories <span className="caret"></span></Link>
                <ul className="dropdown-menu">
                  <li><Link to={"#"}>Phones</Link></li>
                  <li><Link to={"#"}>Phones</Link></li>
                  <li className="divider"></li>
                  <li><Link to={"#"}>All Categories</Link></li>
                </ul>
            </li>
            
          </ul>
          <ul className="nav navbar-nav navbar-right">
          <li className="nav-item ml-5">
            <Link to={"#"} className="ml-auto"><span className="badge pull-right">4</span>
                  <i className="glyphicon glyphicon-shopping-cart"></i></Link></li>            
          <li><Link to={"#"}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to={loginModal} data-toggle="modal" data-target="#loginModal"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </ul>
          <form action="" className="navbar-form navbar-left">
            <div className="input-group">
              <input type="text" className="form-control"/>
              <div className="input-group-btn">
              <button className="btn btn-default" type="submit">
              <i className="glyphicon glyphicon-search"></i>
                </button>  
              </div>      
            </div>
          </form>
        </div>
      </nav>
    )
  }
}


