import React, { Component } from 'react';
import './NavbarTopLacteos.css';
import ArrowB from '../img/atras.png';
import { Link } from 'react-router-dom';

class NavbarTopLacteos extends Component{ 
    render(){
        return( 
            <div id="navbartopcat" className="header">
                <div className="container">
                   <div className="row">
                   <Link to="/categories"><img  className="arrowb" src={ArrowB} alt="arrow to back"/></Link>
                       <p>Lacteos</p>
                    </div>  
                </div>
            </div>
        )
    }
} 
export default NavbarTopLacteos