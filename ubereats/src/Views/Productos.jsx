import React, { Component } from 'react';
import NavbarTopLacteos  from '../Components/NavbarTopLacteos'
import ItemList from '../Components/ItemList'
import ScrollingNavbar from '../Components/ScrollingNavbar'


class Productos extends Component{
    constructor(props){
        super(props) 
       
        // this.addToFavorite=this.addToFavorite.bind(this)
    
    
    
    }
   
    render(){
        
        return( 
            <React.Fragment>

                <NavbarTopLacteos/>
                <ScrollingNavbar/>

               

                <div className="content container">
                  <ItemList addToFavorite={this.addToFavorite}/>
                </div>
                  
            </React.Fragment>
        )
    }
} 
export default Productos