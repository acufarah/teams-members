// import {
//     GET_MEMBERS_ERROR,
//     GET_MEMBER_ERROR,
//     MEMBERS_IS_LOADING,
//     MEMBER_IS_LOADING,
//     GET_MEMBERS,
//     GET_MEMBER
// } from '../../store/types';

// const initialState = {
//     members: [],
//     member: null,
//     loading: true,
//     error: {}
// }

// export default function(state= initialState, action){
//     const { type, payload } = action;
//     switch(type){
//         case GET_MEMBERS:
//             return {
//                 ...state,
//                 members: payload,
//                 loading: false
//             };
//         case GET_MEMBERS_ERROR:
//             return {
//                 ...state,
//                 error: payload,
//                 loading: false
//             };
//         default:
//             return state;
//     }
// }