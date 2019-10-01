import React, { Component } from 'react';
import './NavbarTopCategories.css'
import ArrowB from '../img/atras.png'

class NavbarTopCategories extends Component{
    render(){
        return(
            <div id="navbartopcat" className="header">
                <div className="container">
                   <div className="row">
                   <img  className="arrowb" src={ArrowB} alt="arrow to back"/>
                       <p>Tottus</p>
                    </div>  
                </div>
            </div>
        )
    }
} 
export default NavbarTopCategories