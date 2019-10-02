import React, { Component } from 'react';
import Item from './Item';
import './ItemList.css'
class ItemList extends Component{
    render(){
        return(
            <React.Fragment>
              <div className="ItemList row">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </div>
                  
            </React.Fragment>
        )
    }
} 
export default ItemList