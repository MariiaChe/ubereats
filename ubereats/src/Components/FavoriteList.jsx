import React, { Component } from 'react';
import FavoriteItem from './FavoriteItem';
import './FavoriteList.css'
class FavoriteList extends Component{
    render(){
        return(
            <React.Fragment> 
              <div className="FavoriteList row">
                <FavoriteItem heart="corazon-rojo.png" image="LecheColunEntera.png"/>
                <FavoriteItem heart="corazon-rojo.png" image="Bebidas01.png"/>
                <FavoriteItem heart="corazon-rojo.png" image="Bebidas02.png"/>
                <FavoriteItem heart="corazon-rojo.png" image="Bebidas03.png"/>
              </div>
                  
            </React.Fragment>
        )
    }
} 
export default FavoriteList