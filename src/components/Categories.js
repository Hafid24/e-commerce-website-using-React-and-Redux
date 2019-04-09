import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../style/Categories.css'

export default class Categories extends Component {
 getClass=(category)=>{
   let classes = [];
   if(category=='All'){
      classes.push("list-group-item active");
   }else{
    classes.push("list-group-item");
   }
   if(category.toLowerCase()=='apple'){
    classes.push("list-group-item active");
 }else{
  classes.push("list-group-item");
 }
if(category.toLowerCase()=='google'){
  classes.push("list-group-item active");
}else{
classes.push("list-group-item");
}
if(category.toLowerCase()=='htc'){
  classes.push("list-group-item active");
}else{
classes.push("list-group-item");
}
if(category.toLowerCase()=='samsung'){
  classes.push("list-group-item active");
}else{
classes.push("list-group-item");
}
return classes;
 }

  render() {
     const classes = this.getClass(this.props.category)
    return (
      <div className="categories-container">
      <h3>Categories</h3>
            <div class="list-group">
                    <Link to={"/"} className={classes[0]}>All</Link>
                    <Link to={"/brand/apple"} className={classes[1]}>Apple</Link>   
                    <Link to={"/brand/google"} className={classes[2]}>Google</Link>
                    <Link to={"/brand/htc"} className={classes[3]}>HTC</Link>
                    <Link to={"/brand/samsung"} className={classes[4]}>Samsung</Link>
            </div>
      </div>
         
    )
  }
}
