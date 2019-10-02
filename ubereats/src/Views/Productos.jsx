import React, { Component } from 'react';
import NavbarTopCategories from '../Components/NavbarTopCategories'
import ItemList from '../Components/ItemList'
class Productos extends Component{
    render(){
        return(
            <React.Fragment>
                <NavbarTopCategories/>
                <div className="content container">
                  <ItemList/>
                </div>
                  
            </React.Fragment>
        )
    }
} 
export default Productos