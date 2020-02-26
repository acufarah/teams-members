import axios from 'axios';
import {
    GET_TEAMS,
    GET_TEAM,
    GET_TEAMS_ERROR,
    GET_TEAM_ERROR
} from '../../store/types.js';

export default function getTeams(){
    const request = axios.get('https://tempo-exercises.herokuapp.com/rest/v1/teams')
    .then(response => response.data);

    return{
        type: GET_TEAMS,
        payload: request
    }
}