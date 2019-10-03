import React, { Component } from 'react';
import FavoriteItem from './FavoriteItem';
import './FavoriteList.css'
class FavoriteList extends Component{
    render(){
        return(
            <React.Fragment> 
              <div className="FavoriteList row">
                <FavoriteItem heart="corazon-rojo.png" image="LecheColunEntera.png"/>
                <FavoriteItem heart="corazon-rojo.png" image="LecheColunEntera.png"/>
                <FavoriteItem heart="corazon-rojo.png" image="LecheColunEntera.png"/>
                <FavoriteItem heart="corazon-rojo.png" image="LecheColunEntera.png"/>
              </div>
                  
            </React.Fragment>
        )
    }
} 
export default FavoriteList