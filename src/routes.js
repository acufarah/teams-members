import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/navbar'
import store from './store';
import home from './components/home';
import teamsList from './components/teamsList';
import usersList from './components/usersList';
import searchTeams from './components/searchTeams';
import searchMembers from './components/searchMembers';
import userInfo from './components/userInfo';
import users from './components/users';

const Routes = () => {
    return(
             <Provider store={store}>
                <BrowserRouter>
                <div>
                    <NavBar/>
                    <div className='container'>
                    <Switch>
                        <Route exact path = '/' component={ home } />
                        <Route exact path = '/teamsDirectory' component={ teamsList } />
                        <Route exact path = '/teamMembers/:id/:name' component={ usersList } />
                        <Route exact path = '/searchTeams' component={ searchTeams } />
                        <Route exact path = '/searchUsers' component={ searchMembers } />
                        // <Route exact path = '/userInfo/:userId/:teamId' component={ userInfo } />
                        <Route exact path = '/userDirectory' component={ users } />
                    </Switch>
                    </div>
                </div>
                </BrowserRouter>
            </Provider>
        )
}

export default Routes;