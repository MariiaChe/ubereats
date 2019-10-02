import React, { Component } from 'react';
import './ShopsList.css'
import { Link } from 'react-router-dom';
import images from '../ImportImages'

class ShopsList extends Component{
    render(){
        return(
            <div id="shopslist" className="container">
                <div className="row">
                        <div className="shops">
                        <Link to="/categories"><img className="img-fluid" src={images['tottu.png']} alt="Tottus"/></Link>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['jumbo.png']} alt="Jumbo"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['lider.png']} alt="Lider"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['okmarket.png']} alt="OkMarket"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['tottu.png']} alt="Tottus"/>
                        </div>                
                        <div className="shops">
                            <img className="img-fluid" src={images['jumbo.png']} alt="Jumbo"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['lider.png']} alt="Lider"/>
                        </div>
                   
                    
                        <div className="shops">
                            <img className="img-fluid" src={images['okmarket.png']} alt="OkMarket"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['tottu.png']} alt="Tottus"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['jumbo.png']} alt="Jumbo"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['lider.png']} alt="Lider"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['okmarket.png']} alt="OkMarket"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['tottu.png']} alt="Tottus"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['jumbo.png']} alt="Jumbo"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['lider.png']} alt="Lider"/>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['okmarket.png']} alt="OkMarket"/>
                        </div>
                     
                   
                </div>
            </div>
        )
    }
} 
export default ShopsList