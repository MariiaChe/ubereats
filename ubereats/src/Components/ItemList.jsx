import React, { Component } from 'react';
import Item from './Item';
import './ItemList.css'
import Data from '../data/supermarket'
class ItemList extends Component{
//   constructor(props){
//     super(props) 
//     this.state={
//         isFavorite:false,
//     }
//     this.toggleFavorite=this.toggleFavorite.bind(this)



// }
// toggleFavorite(){
//   this.setState({
//     isFavorite:!this.state.isFavorite
//   })
// }
    render(){
        
        return( 
            <React.Fragment>
              <div className="ItemList row"> 
              {Data.Pasillos.Lacteos[this.props.sub].map(el=><Item idInp={"Inp"+el.name} idB={"B"+el.name} idAdd={el.name} itemQuantity={this.props.itemQuantity} idItem={el.id} width="60%" subtractFromBasket={this.props.subtractFromBasket} addToBasket={this.props.addToBasket} imageItem={el.url} itemName={el.name} itemPrice={el.value}/>)}
              </div>
                  
            </React.Fragment>
        )
    }
} 
export default ItemList