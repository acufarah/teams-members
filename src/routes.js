import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import home from './components/home';
import teamsList from './components/teamsList';
import usersList from './components/usersList';

const Routes = () => {
    return(
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' component={ home } />
                    <Route exact path = '/teamsDirectory' component={ teamsList } />
                    <Route exact path = '/usersDirectory' component={ usersList } />
                </Switch>
            </BrowserRouter>
        )
}

export default Routes;