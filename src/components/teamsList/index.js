import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Teams extends Component {
    state = {
        teams: [],
        users: []
    }
    componentDidMount(){
        axios.get("https://tempo-exercises.herokuapp.com/rest/v1/teams")
        .then(res => {
            console.log(res);
            this.setState({
                teams: res.data
            })
        })
        axios.get("https://tempo-exercises.herokuapp.com/rest/v1/users").then(res => {
            console.log(res);
            this.setState({users: res.data})
        })
    }

    render(){
        const { teams } = this.state;
        const teamListings = teams.length ? (
                teams.map( team => {
                    return (
                        <div className="card full-height shadow-lg p-3 mb-5 bg-white rounded" key={team.id}>
                            <div className = 'card-body'>
                                <ul>
                                    <h5 className = 'card-title'>Team Name: {team.name}</h5>
                                    <h6 className = 'card-subtitle'>Team Lead Id: {team.teamLead}</h6>
                                    <li><Link to={`/teamMembers/${team.id}/${team.name}`}>Click to see Team Member List</Link></li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            ) : 
            (
                <div className= 'center'>
                    Loading Team Listings.
                </div>
            )
    return (
        <div className= 'container'>
            <h4 className = 'center'>Team Directory</h4>
            {teamListings}
        </div>
        )
    }
}

export default Teams;