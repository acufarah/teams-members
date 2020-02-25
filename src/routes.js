import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import home from './components/home';

const Routes = () => {
    return(
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' component={ home } />
                </Switch>
            </BrowserRouter>
        )
}

export default Routes;