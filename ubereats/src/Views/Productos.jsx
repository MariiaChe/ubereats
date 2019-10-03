import React, { Component } from 'react';
import NavbarTopLacteos  from '../Components/NavbarTopLacteos'
import ItemList from '../Components/ItemList'
import ScrollingNavbar from '../Components/ScrollingNavbar'
import  NavbarBottom from '../Components/NavbarBottom'
import Supermarket from '../supermarket.json'

class Productos extends Component{
    constructor(props){
        super(props) }
    render(){
        
        return(
            <React.Fragment>

                <NavbarTopLacteos/>
                <ScrollingNavbar/>
                <div className="content container">
                  <ItemList/>
                </div>
               <NavbarBottom/>
            </React.Fragment>
        )
    }
} 
export default Productos