import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shops from './Views/Shops'
import Categories from './Views/Categories'
import Productos from './Views/Productos'
import FavoriteList from './Views/FavoriteList'
const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component = {Shops}/> 
            <Route path='/categories' component = {Categories}/>
            <Route path='/productos' component = {Productos}/>
            <Route path='/favoritos' component = {FavoriteList}/>
        </Switch>
    )
}
export default Routes;