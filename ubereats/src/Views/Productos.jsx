import React, { Component } from 'react';
import NavbarTopCategories from '../Components/NavbarTopCategories'
import ItemList from '../Components/ItemList'
import ScrollingNavbar from '../Components/ScrollingNavbar'
import Supermarket from '../supermarket.json'

class Productos extends Component{
    constructor(props){
        super(props) }
    render(){
        
        return(
            <React.Fragment>
                <NavbarTopCategories/>
                <ScrollingNavbar/>
                <div className="content container">
                  <ItemList/>
                </div>
                  
            </React.Fragment>
        )
    }
} 
export default Productos