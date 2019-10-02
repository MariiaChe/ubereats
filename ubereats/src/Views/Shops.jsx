import React, { Component } from 'react';
import ShopsList from '../Components/ShopsList'
import NavbarTop from '../Components/NavbarTop'

class Shops extends Component{
    render(){
        return(
            <React.Fragment>
                <NavbarTop/>
                <div className="content">
                    <ShopsList />
                </div>
                  
            </React.Fragment>
        )
    }
} 
export default Shops