import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import SearchPlayers from './pages/SearchPlayers/SearchPlayers';
import SearchCountries from './pages/SearchCountries/SearchCountries';
import SearchClubs from './pages/SearchClubs/SearchClubs';
import BuildTeam from './pages/BuildTeam/BuildTeam';
import PlayersRetrieved from './pages/PlayersRetrieved/PlayersRetrieved';

const AppRouter = () => (
    <BrowserRouter>
      {/*<Header />*/}
      <Switch >
        <Route exact path = '/' component={Homepage}/>
        <Route path = '/players' component={SearchPlayers}/>
        <Route path = '/countries' component={SearchCountries}/>
        <Route path = '/clubs' component={SearchClubs}/>
        <Route path = '/build-team' component={BuildTeam}/>
        <Route path = '/players-retrieved' component={PlayersRetrieved}/>
        {/*<Route path = '/player-details/:id' component={}/>*/}
      </Switch>
    </BrowserRouter>
);

export default AppRouter;
