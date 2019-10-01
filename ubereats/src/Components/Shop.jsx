import React, { Component } from 'react';
// import Tottus from '../img/tottu.png'
import './Shop.css'
class Shop extends Component{
    render(){
        return(
            <React.Fragment>
                <div id="shop">
                     <img className="img-fluid" src={Tottus} alt=""/>
                </div>
            </React.Fragment>
        )
    }
} 
export default Shop