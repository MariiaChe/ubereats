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
                
              {Data.Pasillos.Lacteos[this.props.sub].map(el=><Item width="60%" imageItem={el.url} itemName={el.name} itemPrice={"$"+el.value}/>)}
              {/* {Data.Pasillos.Lacteos.Quesos.map(el=><Item width="60%" imageItem={el.url} itemName={el.name} itemPrice={"$"+el.value}/>)}
              {Data.Pasillos.Lacteos.Mantequillas.map(el=><Item width="60%" imageItem={el.url} itemName={el.name} itemPrice={"$"+el.value}/>)}
              {Data.Pasillos.Lacteos.Cremas.map(el=><Item width="60%" imageItem={el.url} itemName={el.name} itemPrice={"$"+el.value}/>)} */}
              </div>
                  
            </React.Fragment>
        )
    }
} 
export default ItemList