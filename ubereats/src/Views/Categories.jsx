import React, { Component } from 'react';
import Category from '../Components/Category'
import './Categories.css'
import NavbarTopCategories from '../Components/NavbarTopCategories'
class Categories extends Component{
    render(){
        return(
            <React.Fragment>
                <NavbarTopCategories/>
                <div id="categories" className="content container">
                    <div className="row">
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
                       <Category/>
                    </div>
                </div>
                  
            </React.Fragment>
        )
    }
} 
export default Categories