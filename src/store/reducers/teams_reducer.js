import {
    FETCH_TEAMS,
} from '../../store/types';

const initialState = {
    teams: []
}

export default function(state= initialState, action){
    const { type, payload } = action;
    switch(type){
        case FETCH_TEAMS:
            return Object.assign({}, state, {
            teams: state.teams.concat(action.payload)
            });
            // return {
            //     ...state,
            //     teams: payload,
            // };
        default:
            return state;
    }
}