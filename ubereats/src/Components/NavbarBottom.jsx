import React, { Component } from 'react';
import './NavbarBottom.css'
class NavbarBottom extends Component{
    render(){
        return(
            <div id="ButtonPedido" className="footer text-center ">
            <button className="row ml-4">
                <div><a>1</a></div>
            
                <p>Ver Canasta</p>
                <p>$000</p>
                 
            </button>
            </div>
        )
    }
} 
export default NavbarBottom