import React, { Component } from 'react';
import './Item.css'
// import HeartGray from '../img/corazon-gris.png'
//import Leche from '../img/categories/Milks/LecheColunEntera.png'
import ButtonAdd from './ButtonAdd'
import ButtonMoreLess from './ButtonMoreLess'
import images from '../ImportImages'
class Item extends Component{
  constructor(props){
    super(props) 
    this.state={
        isFavorite:false,
        isBtnAdd:true,
        quantityInInput:0
    }
    this.toggleFavorite=this.toggleFavorite.bind(this)
    this.moreLessButton=this.moreLessButton.bind(this)



}
toggleFavorite(){
  this.setState({
    isFavorite:!this.state.isFavorite
  })
}
moreLessButton(){
 
    this.setState({
      isBtnAdd:false
    })
    this.setState({
      quantityInInput:1
    })
  
    
  
}


    render(){

        return( 
            <React.Fragment>
              <div className="Item">
                <div className="heart">
                  { this.state.isFavorite?
                  <img onClick={()=>this.toggleFavorite()} className="img-fluid" src={images["corazon-rojo.png"]} alt="corazon rojo"/>:
                  <img onClick={()=>this.toggleFavorite()} className="img-fluid" src={images["corazon-gris.png"]} alt="corazon gris"/>
                } 
                  </div> 
                <div className="Itemimg"><img style={{width:this.props.width}}  className="img-fluid" src={images[this.props.imageItem]} alt="imagen producto"/></div>
                <div className="Itemname"><p>{this.props.itemName}</p></div>
                {/* <div className="Itemweight"><p>1000ml</p></div> */}
                <div className="Itemprice"><p>{this.props.itemPrice}</p></div>
                <div className="Itembutton" onClick={()=>this.moreLessButton()}>
                  {this.state.isBtnAdd?
                  <ButtonAdd  itemPrice={this.props.itemPrice} addToBasket={this.props.addToBasket}/>:
                  <ButtonMoreLess itemQuantity={this.props.itemQuantity} itemPrice={this.props.itemPrice} addToBasket={this.props.addToBasket} subtractFromBasket={this.props.subtractFromBasket}/>
                  }
                </div>
              </div>    
            </React.Fragment>
        )
    }
} 
export default Item