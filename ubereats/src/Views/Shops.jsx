import React, { Component } from 'react';
import ShopsList from '../Components/ShopsList'
import NavbarBottom from '../Components/NavbarBottom'
class Shops extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="content">
                    <ShopsList />
                </div>
                    <NavbarBottom/>
            </React.Fragment>
        )
    }
} 
export default Shops