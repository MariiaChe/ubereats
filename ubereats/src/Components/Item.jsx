import React, { Component } from 'react';
import './Item.css'
import HeartGray from '../img/corazon-gris.png'
import Leche from '../img/categories/Milks/LecheColunEntera.png'
import ButtonMoreLess from './ButtonMoreLess'
class Item extends Component{
    render(){
        return(
            <React.Fragment>
              <div className="Item">
                <div className="heart"><img className="img-fluid" src={HeartGray} alt="corazon gris"/></div>
                <div className="Itemimg"><img className="img-fluid" src={Leche} alt="imagen producto"/></div>
                <div className="Itemname"><p>Soprole - Leche Entera</p></div>
                {/* <div className="Itemweight"><p>1000ml</p></div> */}
                <div className="Itemprice"><p>$900</p></div>
                <div className="Itembutton"><ButtonMoreLess/></div>
              </div>    
            </React.Fragment>
        )
    }
} 
export default Item