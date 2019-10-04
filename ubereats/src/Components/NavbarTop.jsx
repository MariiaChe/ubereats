import React, { Component } from 'react';
import './NavbarTop.css'
import ArrowB from '../img/atras.png'
import ArrowD from '../img/abajo.png'

class NavbarTop extends Component{
    render(){
        return(
            <div id="navbartop" className="header">
                <div className="container">
                   <div className="row">
                       <img  className="arrowb" id="icon1"src={ArrowB} alt="arrow to back"/>
                       <p >Carmen 566</p>
                       <div className="arrowd">
                           <img id="arrowd"  src={ArrowD} alt="arrow to down"/>
                       </div>
                    </div>  
                </div>
            </div>
        )
    }
} 
export default NavbarTop