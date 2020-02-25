import { combineReducers } from 'redux';
import members from './members_reducer';
import teams from './teams_reducer';

const rootReducer = combineReducers({
    members,
    teams
});

export default rootReducer;