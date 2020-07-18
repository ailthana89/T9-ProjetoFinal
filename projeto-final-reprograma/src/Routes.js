import React from 'react';
import Home from './Pages/Home/Home';
import GameHorizon from './Pages/GameHorizon/GameHorizon';
import GameTombRaider from './Pages/GameTombRaider/GameTombRaider';
import Gamelol from './Pages/Gamelol/Gamelol';
import GameGow from './Pages/GameGow/GameGow'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes = () =>{
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/GameHorizon' component={GameHorizon}/>
            <Route exact path='/GameTombRaider' component={GameTombRaider}/>
            <Route exact path='/Gamelol' component={Gamelol}/>
            <Route exact path='/GameGow' component={GameGow}/>
        </Switch>
    </BrowserRouter>
    )
}  

export default Routes;