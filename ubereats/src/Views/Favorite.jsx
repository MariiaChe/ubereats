import React, { Component } from 'react';
import NavbarTopFavorite from '../Components/NavbarTopFavorite';
import FavoriteList from '../Components/FavoriteList'
import './Favorite.css'

class Categories extends Component{
    render(){ 
        return(
            <React.Fragment>
               <NavbarTopFavorite />
               <div className="content container">
               <FavoriteList />
               </div>
            </React.Fragment>
        )
    }
} 
export default Categories