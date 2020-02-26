import axios from 'axios';
import {
    GET_TEAMS,
    GET_TEAM,
    GET_TEAMS_ERROR,
    GET_TEAM_ERROR
} from './types.js';

export const getTeams = () => async dispatch => {
    try {
        const res = await axios.get('https://tempo-exercises.herokuapp.com/rest/v1/teams');
        
        dispatch({
            type: GET_TEAMS,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: GET_TEAMS_ERROR,
            payload: {status: err.response.status}
        });
    }
};