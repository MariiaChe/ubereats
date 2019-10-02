import React, { Component } from 'react';
import NavbarTopLacteos  from '../Components/NavbarTopLacteos'
import ItemList from '../Components/ItemList'
class Productos extends Component{
    render(){
        return(
            <React.Fragment>
                <NavbarTopLacteos/>
                <div className="content container">
                  <ItemList/>
                </div>
                  
            </React.Fragment>
        )
    }
} 
export default Productos