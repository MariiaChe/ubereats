import React, { Component } from 'react';
import './NavbarBottom.css'
class NavbarBottom extends Component{
    render(){
        return(
            <div className="footer" id="navbottom">
                <div id="canasta-total">
                <div id="total-item">
                        <span >{this.props.itemTotal}</span>
                </div>
                
                <div id="canasta">
                        <span>Ver Canasta</span>
                </div>
                <div id="total-price">
                        <span>${this.props.sumaTotal}</span>
                </div>
                </div>
            </div>
        )
    }
} 
export default NavbarBottom