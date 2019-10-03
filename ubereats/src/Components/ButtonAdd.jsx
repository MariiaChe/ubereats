import React, { Component } from 'react';
import './ButtonAdd.css'
class ButtonAdd extends Component{
    render(){
        return( 
            <React.Fragment>
              <button key={this.props.idAdd} onClick={()=>this.props.addToBasket(this.props.itemPrice, this.props.itemQuantity)}  className="ButtonAdd">AGREGAR</button>   
            </React.Fragment>
        )
    }
} 
export default ButtonAdd