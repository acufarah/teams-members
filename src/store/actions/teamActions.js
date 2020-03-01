import axios from 'axios';
import {
    FETCH_TEAMS,
    FETCH_TEAM,
} from '../../store/types.js';

// export default function getTeams(){
//     const request = axios.get('https://tempo-exercises.herokuapp.com/rest/v1/teams')
//     .then(response => response.data);
//     return{
//         type: GET_TEAMS,
//         payload: request
//     }
// }

const fetchTeams = (teams) => {
  return {
    type: FETCH_TEAMS,
    payload: teams
  }
};

export const fetchAllTeams = () => {
  return (dispatch) => {
    return axios.get('https://tempo-exercises.herokuapp.com/rest/v1/teams')
      .then(response => {
        dispatch(fetchTeams(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export default fetchTeams;