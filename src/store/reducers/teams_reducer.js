import {
    GET_TEAMS_ERROR,
    GET_TEAM_ERROR,
    TEAMS_IS_LOADING,
    TEAM_IS_LOADING,
    GET_TEAMS,
    GET_TEAM
} from '../../store/types';

// const initialState = {
//     teams: {},
//     team: null,
//     loading: true,
//     error: {}
// }

export default function(state= {}, action){
    const { type, payload } = action;
    switch(type){
        case GET_TEAMS:
            return {
                ...state,
                teams: payload,
                loading: false
            };
        case GET_TEAMS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}