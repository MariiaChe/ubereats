import React, { Component } from 'react';
import './ButtonMoreLess.css'
class ButtonMoreLess extends Component{
    constructor(props){
        super(props) 
        this.state={
          quantity:1
        }
        this.sumar=this.sumar.bind(this)
        this.restar=this.restar.bind(this)
    }
    restar(){
        if(this.state.quantity>0){
        this.setState({
            quantity:this.state.quantity-1
        })
        this.props.subtractFromBasket(this.props.itemPrice, this.props.itemQuantity)
        }
    }
    sumar(){
        this.setState({
            quantity: this.state.quantity+1
        })
        this.props.addToBasket(this.props.itemPrice, this.props.itemQuantity)
    }
    render(){
        return( 
            <React.Fragment>
              <div key={this.props.idB} className="row BtnMoreLess">
                  <div onClick={()=>this.restar()} className="less">-</div>
                  <input value={this.state.quantity} type="number"/>
                  <div onClick={()=>this.sumar()} className="more">+</div>
              </div>  
            </React.Fragment>
        )
    }
} 
export default ButtonMoreLess