import React, { Component } from 'react';
import './NavbarBottom.css'
class NavbarBottom extends Component{
    render(){
        return(
            <div className="footer text-center ">
            <button className="row ml-4 mt-1">
                <p className="oki">1</p>
            
                <p>Ver Canasta</p>
                <p>$000</p>
                
            </button>
            </div>
        )
    }
} 
export default NavbarBottom