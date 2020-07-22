import React from 'react';
import Home from './Pages/Home/Home';
import VideoPlayer from './Pages/VideoPlayer/VideoPlayer';
import dataJson from './data.json'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Routes = () =>{
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/GameHorizon'>
                <VideoPlayer data={dataJson.GameHorizon}/>
            </Route>
            <Route path='/GameTombRaider'>
                <VideoPlayer data={dataJson.GameTombRaider}/>
            </Route>
            <Route path='/Gamelol'>
                <VideoPlayer data={dataJson.Gamelol}/>
            </Route>
            <Route path='/GameGow'>
                <VideoPlayer data={dataJson.GameGow}/>
            </Route>
            <Route path='/GameCreed'>
                <VideoPlayer data={dataJson.GameCreed}/>
            </Route>
            <Route path='/GameLast'>
                <VideoPlayer data={dataJson.GameLast}/>
            </Route>
            <Route path='/GameZelda'>
                <VideoPlayer data={dataJson.GameZelda}/>
            </Route>
            <Route path='/GameDandara'>
                <VideoPlayer data={dataJson.GameDandara}/>
            </Route>
        </Switch>
    </BrowserRouter>
    )
}  

export default Routes;