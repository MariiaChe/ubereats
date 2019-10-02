import React, { Component } from 'react';
import './Category.css';
import images from '../ImportImages'
class Category extends Component{
    render(){ 
        return( 
            <React.Fragment>
                        <div className="category">
                           <img className="img-fluid" src={images[this.props.image]} alt=""/>
                           <p>{this.props.name}</p>
                        </div>    
            </React.Fragment>
        )
    }
} 
export default Category