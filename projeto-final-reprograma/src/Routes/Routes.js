import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home'
import PageMain from '../Pages/Main/Main'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            

        </Switch>
    </BrowserRouter>
)

export default Routes;
