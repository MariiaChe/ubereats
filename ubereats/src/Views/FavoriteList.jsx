import React, { Component } from 'react';
import NavbarTopFavorite from '../Components/NavbarTopFavorite'
import './FavoriteList.css'
class FavoriteList extends Component{
    render(){ 
        return(
            <React.Fragment> 
                <NavbarTopFavorite/>
            </React.Fragment>
        )
    }
} 
export default FavoriteList