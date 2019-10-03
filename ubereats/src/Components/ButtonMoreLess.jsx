import React, { Component } from 'react';
import './ButtonMoreLess.css'
class ButtonMoreLess extends Component{
    render(){
        return( 
            <React.Fragment>
              <div className="row BtnMoreLess">
                  <div onClick={()=>this.props.subtractFromBasket(this.props.itemPrice, this.props.itemQuantity)} className="less">-</div>
                  <input value={this.props.itemQuantity} type="number"/>
                  <div onClick={()=>this.props.addToBasket(this.props.itemPrice, this.props.itemQuantity)} className="more">+</div>
              </div>  
            </React.Fragment>
        )
    }
} 
export default ButtonMoreLess