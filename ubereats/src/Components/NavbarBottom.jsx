import React, { Component } from 'react';
import './NavbarBottom.css'
class NavbarBottom extends Component{
    render(){
        return(
            <div className="footer" id="navbottom">
               <span className="oki">1</span>
               <span>Ver Canasta</span>
              <span className="price ml-1">$0</span>
            </div>
        )
    }
} 
export default NavbarBottom