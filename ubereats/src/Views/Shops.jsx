import React, { Component } from 'react';
import ShopsList from '../Components/ShopsList'
import NavbarBottom from '../Components/NavbarBottom'
class Shops extends Component{
    render(){
        return(
            <React.Fragment>
                 <ShopsList />
                 <NavbarBottom/>
            </React.Fragment>
        )
    }
} 
export default Shops