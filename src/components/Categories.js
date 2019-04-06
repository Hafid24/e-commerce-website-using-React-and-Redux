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
   if(category=='Apple'){
    classes.push("list-group-item active");
 }else{
  classes.push("list-group-item");
 }
 if(category=='Nokia'){
  classes.push("list-group-item active");
}else{
classes.push("list-group-item");
}
if(category=='Google'){
  classes.push("list-group-item active");
}else{
classes.push("list-group-item");
}
if(category=='HTC'){
  classes.push("list-group-item active");
}else{
classes.push("list-group-item");
}
if(category=='Samsung'){
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
                    <Link to="#" className={classes[0]}>All</Link>
                    <Link to="#" className={classes[1]}>Apple</Link>   
                    <Link to="#" className={classes[2]}>Nokia</Link>
                    <Link to="#" className={classes[3]}>Google</Link>
                    <Link to="#" className={classes[4]}>HTC</Link>
                    <Link to="#" className={classes[5]}>Sumsung</Link>
            </div>
      </div>
         
    )
  }
}
