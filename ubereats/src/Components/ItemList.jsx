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
                {Data.Pasillos.Lacteos.Leches.map(el=><Item width="60%" imageItem={el.url} itemName={el.name} itemPrice={"$"+el.value}/>)}
                {/* <Item width="72%" imageItem="LecheColunEntera.png" itemName="Colun - Leche Entera" itemPrice="$850"/>
                <Item width="72%" imageItem="LecheColunSinL.png" itemName="Colun -Leche sin Lac.." itemPrice="$980" />
                <Item width="62%" imageItem="LecheLoncoDeskChoc.png" itemName="Colun - Leche Descremada Choc.." itemPrice="$780"/>
                <Item width="51%"  imageItem="LecheSoproleDescr.png" itemName="Sopreole - Leche Descremada" itemPrice="$890" />
                <Item width="62%"  imageItem="LecheLoncoSinLactosaDes.png" itemName="Lonco -Leche Sin Lact.." itemPrice="$1020" />
                <Item width="51%"  imageItem="LecheSoproleEnt.png" itemName="Soprole - Leche Entera" itemPrice="$900"/> */}
              </div>
                  
            </React.Fragment>
        )
    }
} 
export default ItemList