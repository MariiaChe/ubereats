import React, { Component } from 'react';
import './NavbarTopFavorite.css'
import ArrowB from '../img/atras.png'
import { Link } from 'react-router-dom';

class NavbarTopFavorite extends Component{ 
    render(){
        return(  
            <div id="navbartopfav" className="header">
                <div className="container">
                   <div className="row">
                   <Link to="/categories"><img  className="arrowb" src={ArrowB} alt="arrow to back"/></Link>
                       <p>Lista de favoritos</p>
                    </div>  
                </div>
            </div>
        )
    }
} 
export default NavbarTopFavorite