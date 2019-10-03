import React, { Component } from 'react';
import './ButtonMoreLess.css'
class ButtonMoreLess extends Component{
    render(){
        return( 
            <React.Fragment>
              <div key={this.props.idB} className="row BtnMoreLess">
                  <div key={this.props.idless} onClick={()=>this.props.subtractFromBasket(this.props.itemPrice, this.props.itemQuantity)} className="less">-</div>
                  <input key={this.props.idInp} value={this.props.itemQuantity} type="number"/>
                  <div key={this.props.idmore} onClick={()=>this.props.addToBasket(this.props.itemPrice, this.props.itemQuantity)} className="more">+</div>
              </div>  
            </React.Fragment>
        )
    }
} 
export default ButtonMoreLess