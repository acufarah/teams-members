// import React, { Component } from 'react';
// import axios from 'axios';
// import PropTypes from 'proptypes';
// import { connect } from 'react-redux';
// import Spinner from 'react-spinner-material';
// import getTeams from '../../store/actions/teamActions';
// import { Link } from 'react-router-dom';
// import {
//   Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
// } from 'reactstrap';

// class Teams extends Component {
//     state = {
//         teams: [],
//         teamname: [],
//         suggestions: []
//     }
//     componentDidMount(){
//         axios.get("https://tempo-exercises.herokuapp.com/rest/v1/teams")
//         .then(res => {
//             console.log(res);
//             this.setState({
//                 teams: res.data,
//                 teamname: res.data.name
//             })
//         })
//     }

//     onTextChanged = (e) => {
//         const value = e.target.value;
//         const { teams } = this.state;
//         let suggestions = [];
//         if(value.length > 0){
//              const regex = new RegExp(`^${value}`,'i');
//              suggestions = teams[name].sort().filter(v => regex.test(value));

//         } this.setState( () => ({suggestions}));
//     }

//     renderSuggestions (){
//         const { suggestions } = this.state;
//         if(suggestions.length===0){
//             return null;
//         }
//         return (
//             <ul>
//                 {suggestions.map( teamname => <li>{teamname}</li>)}
//             </ul>
//         ); 
//     }

//     render(){
//         const { teams } = this.state;
//         const teamListings = teams.length ? (
//                 teams.map( team => {
//                     return (
//                         <div className = 'Card' key={team.id}>
//                             <div className = 'CardBody'>
//                             <div>
//                             <input onChange={ this.onTextChanged } type='text'/>
//                             </div>
//                                 <ul>
//                                     <h5 className = 'CardTitle'>Team Name: {team.name}</h5>
//                                     <h6 className = 'CardSubtitle'>Team Lead Id: {team.teamLead}</h6>
//                                     <li><Link to={`/teamMembers/${team.id}/${team.name}`}>Click to see Team Member List</Link></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     )
//                 })
//             ) : 
//             (
//                 <div className= 'center'>
//                     No team listings yet.
//                 </div>
//             )
//     return (
//         <div className= 'container'>
//             <h4 className = 'center'>Team Directory</h4>
//             {teamListings}
//         </div>
//         )
//     }
// }

// Teams.propTypes = {
//     getTeams: PropTypes.func.isRequired,

// }

// const mapStateToProps = state => ({
//     teams: state.teams
// })

// export default connect(mapStateToProps, { getTeams })(Teams);