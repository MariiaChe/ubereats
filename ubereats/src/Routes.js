import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shops from './Views/Shops'
import Categories from './Views/Categories'
const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component = {Shops}/> 
            <Route path='/categories' component = {Categories}/>
        </Switch>
    )
}
export default Routes;