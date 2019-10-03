import React, { Component } from 'react';
import './ButtonAdd.css'
class ButtonAdd extends Component{
    render(){
        return(
            <React.Fragment>
              <button onClick={()=>this.props.addFirst(this.props.itemPrice)} className="ButtonAdd">AGREGAR</button>   
            </React.Fragment>
        )
    }
} 
export default ButtonAdd