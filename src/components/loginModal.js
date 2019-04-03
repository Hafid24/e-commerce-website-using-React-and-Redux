import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class loginModal extends Component {
  render() {
    return (
        <div className="modal fade" id ="loginModal" tabindex="-1" role="dialog" aria-labelledby = "myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
            <div className="modal-header">
               <button type="button" class="close" datadismiss="modal"><span aria-hidden="true">&times;</span><span
               className="sr-only">Close</span></button>
               <h2 class="modal-title" id="myModalLabel">Sign in</h2>
            </div>
            <div className="modal-body">
              <form className="form-signin" role="form">
                  <h3 className="form-signin-heading">Sign in with your email
                    address</h3>
                      <div class="form-group"> 
                        <input type="email" className="form-control" placeholder="Email address" required autofocus/>                    
                      </div>
                      <div class="form-group"> 
                        <input type="password" className="form-control" placeholder="Password" required autofocus/>                    
                      </div>
                      <div className="checkbox">
                      <label><input type="checkbox" value="Remember me"/>Remember me</label>
                      </div>
                      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
             </form>
          </div>
          <div className="row">
            <div className="col-xs-3">
              <Link to={"#"} class="btn btn-facebook btn-large btn-caps
                btn-block">Facebook <span class="icon-facebook"></span></Link>
                </div>
                <div class="col-xs-3">
                <a href="" class="btn btn-twitter btn-large btn-caps btnblock">Twitter <span class="icon-twitter"></span></a>
                </div>
              <div class="col-xs-3">
              <Link to={""} class="btn btn-lg btn-caps btn-block"><span
                   className="icon-dribbble"></span></Link>
              </div>
            </div>
         <div className="modal-footer">
        </div>
      </div>
    </div>
</div>
    )
  }
}
