import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shops from './Views/Shops'
import Categories from './Views/Categories'
import Productos from './Views/Productos'
const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component = {Shops}/> 
            <Route path='/categories' component = {Categories}/>
            <Route path='/leches' component = {Productos}/>
            
        </Switch>
    )
}
export default Routes;