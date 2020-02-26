import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import home from './components/home';
import teamsList from './components/teamsList';

const Routes = () => {
    return(
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' component={ home } />
                    <Route exact path = 'teamsDirectory' component={ teamsList } />
                </Switch>
            </BrowserRouter>
        )
}

export default Routes;