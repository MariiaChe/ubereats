import React, { Component } from 'react';
import './NavbarTopCategories.css'
import ArrowB from '../img/atras.png'
import { Link } from 'react-router-dom';

class NavbarTopCategories extends Component{ 
    render(){
        return(  
            <div id="navbartopcat" className="header">
                <div className="container">
                   <div className="row">
                    <Link to="/"><img  className="arrowb" id="icon" src={ArrowB} alt="arrow to back"/></Link>
                       <p>Tottus</p>
                    </div>  
                </div>
            </div>
        )
    }
} 
export default NavbarTopCategories