import React, { Component } from 'react';
import Item from './Item';
import './ItemList.css'
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
                <Item imageItem="LecheColunEntera.png" itemName="Colun - Leche Entera" itemPrice="$850"/>
                <Item imageItem="LecheColunSinL.png" itemName="Colun -Leche sin Lac.." itemPrice="$980" />
                <Item imageItem="LecheLoncoDeskChoc.png" itemName="Colun - Leche Descremada Choc.." itemPrice="$780"/>
                <Item  imageItem="LecheSoproleDescr.png" itemName="Sopreole - Leche Descremada" itemPrice="$890" />
                <Item  imageItem="LecheLoncoSinLactosaDes.png" itemName="Lonco -Leche Sin Lact.." itemPrice="$1020" />
                <Item  imageItem="LecheSoproleEnt.png" itemName="Soprole - Leche Entera" itemPrice="$900"/>
              </div>
                  
            </React.Fragment>
        )
    }
} 
export default ItemList