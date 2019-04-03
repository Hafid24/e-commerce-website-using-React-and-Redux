import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Arousel extends Component {
  render() {
    return (
      <div className="row carousel-holder">
   <div className="col-md-12">
      <div id="carousel-generic" class="carousel slide"
data-ride="carousel"></div>
        <ol className="carousel-indicators">
            <li data-target="#carousel-generic" data-slideto="0" class="active"></li>
            <li data-target="#carousel-generic" data-slideto="1"></li>
            <li data-target="#carousel-generic" data-slideto="2"></li>
        </ol>
<div className="carousel-inner">
   <div className="item active">
          <img className="slide-image" src="http://placehold.
it/1140x350" alt="" />
   </div>
   <div className="item">
          <img className="slide-image" src="http://placehold.
it/1140x350" alt="" />
    </div>
  <div className="item">
       <img className="slide-image" src="http://placehold.
it/1140x350" alt="" />
    </div>
  </div>
        <Link className="left carousel-control" to="#carousel-generic" data-slide="prev" onClick="$('#carousel-generic').carousel('prev')">
        <span className="glyphicon glyphicon-chevron-left"></span>
        </Link>
        <Link className="right carousel-control" to="#carousel-generic" data-slide="next" onClick="$('#carousel-generic').carousel('next')">
        <span className="glyphicon glyphicon-chevron-right"></span>
        </Link>
</div>
</div>

    )
  }
}
