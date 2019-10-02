import React, { Component } from 'react';
import Category from '../Components/Category'
import './Categories.css'
import NavbarTopCategories from '../Components/NavbarTopCategories'
import {Link} from 'react-router-dom'
class Categories extends Component{
    render(){
        return(
            <React.Fragment>
                <NavbarTopCategories/>
                <div id="categories" className="content container">
                    <div className="row">
                       <Link to='/productos'><Category/></Link>
                       <Category/>
                       <Category/>
                       <Category/>
                       <Category/>
                       <Category/>
                       <Category/>
                       <Category/>
                       <Category/>
                       <Category/>
                       <Category/>
                       <Category/>
                    </div>
                </div>
                  
            </React.Fragment>
        )
    }
} 
export default Categories