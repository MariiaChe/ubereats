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
                        <Link to="/categories"><img className="img-fluid" id="img0" src={images['tottu.png']} alt="Tottus"/></Link>
                        <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" id="img1" src={images['jumbo2.png']} alt="Jumbo"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" id="img2" src={images['lider.png']} alt="Lider"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid"  id="img3" src={images['okmarket.png']} alt="OkMarket"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" id="img4" src={images['santaisabel.png']} alt="Tottus"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>                
                        <div className="shops">
                            <img className="img-fluid" id="img5" src={images['LogoUnimarc.png']} alt="Jumbo"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" id="img6" src={images['LogoExpressLider.png']} alt="Lider"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                   
                    
                        <div className="shops">
                            <img className="img-fluid" id="img7" src={images['okmarket.png']} alt="OkMarket"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        {/* <div className="shops">
                            <img className="img-fluid" src={images['tottu.png']} alt="Tottus"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['jumbo.png']} alt="Jumbo"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['lider.png']} alt="Lider"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['okmarket.png']} alt="OkMarket"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['tottu.png']} alt="Tottus"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['jumbo.png']} alt="Jumbo"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['lider.png']} alt="Lider"/>
                            <div className="textImg">En 60 minutos</div>
                        </div>
                        <div className="shops">
                            <img className="img-fluid" src={images['okmarket.png']} alt="OkMarket"/>
                            <div className="textImg">En 60 minutos</div> */}
                        {/* </div> */}
                     
                   
                </div>
            </div>
        )
    }
} 
export default ShopsList