import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../style/Categories.css'
import PropTypes from 'prop-types';

export default class Categories extends Component {
constructor(props){
    super(props);

    this.state = {
        searchValue:''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
};

 
handleSubmit = (e)=>{
      
  e.preventDefault();
 if(this.state.searchValue !== ''){
  this.props.p.history.push('/brand/'+this.state.searchValue)
 }
}

onSearchInputChange = (e)=>{
  const searchValue = e.target.value;
  console.log(searchValue)
  this.setState({
      searchValue
  });

};


render() {
     const {category} = this.props
    
    return (
    <div>
      <div className="categories-container">
      <h3>Categories</h3>
            <div class="list-group">
                    <Link to={"/"} className={(category=== 'All') ?  ("list-group-item active"):("list-group-item")}>All</Link>
                    <Link to={"/brand/apple"} className={(category=== 'apple') ?  ("list-group-item active"):("list-group-item")}>Apple</Link>   
                    <Link to={"/brand/google"} className={(category=== 'google') ?  ("list-group-item active"):("list-group-item")}>Google</Link>
                    <Link to={"/brand/htc"} className={(category=== 'htc') ?  ("list-group-item active"):("list-group-item")}>HTC</Link>
                    <Link to={"/brand/samsung"} className={(category=== 'samsung') ?  ("list-group-item active"):("list-group-item")}>Samsung</Link>
            </div>
      </div>
      
      <div className="well blosd">
                <h3 className="lead"> 
                    Quick Shop 
                </h3>
                <div className="input-group">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.searchValue}    
                            onChange={this.onSearchInputChange}
                        />
                    </form>
                    <span className="input-group-btn" onClick = {this.handleSubmit}>
                        <button className="btn btn-default">
                            <span className="glyphicon glyphicon-search" />
                        </button>
                    </span>
                </div>
            </div>
      </div>
    )
  }
}


Categories.propTypes = {
  category : PropTypes.string
}
