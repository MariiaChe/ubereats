import React, { Component } from 'react';
import './FavoriteItem.css'
// import HeartGray from '../img/corazon-gris.png'
// import Leche from '../img/categories/Milks/LecheColunEntera.png'
import images from '../ImportImages'
import ButtonMoreLess from './ButtonMoreLess'
import ButtonAdd from './ButtonAdd'
class FavoriteItem extends Component{
    render(){
        return( 
            <React.Fragment>
              <div className="FavItem">
              <div className="row">
                
               
                    <div className="FavItemimg"><img className="img-fluid" src={images[this.props.image]} alt="imagen producto"/></div>
                    <div>
                        <div className="FavItemname"><p>Soprole - Leche Entera</p></div>
                        
                        {/* <div className="Itemweight"><p>1000ml</p></div> */}
                        <div className="FavItemprice"><p>$900</p></div>
                    </div>
                    <div className="heart"><img className="img-fluid" src={images[this.props.heart]} alt="corazon gris"/></div>
                </div>  
                    <div className="FavItembutton"><ButtonAdd/></div>
               
              </div>    
            </React.Fragment>
        )
    }
} 
export default FavoriteItem