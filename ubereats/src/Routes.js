import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Shops from './Views/Shops'
const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component = {Shops}/> 
        </Switch>
    )
}
export default Routes;