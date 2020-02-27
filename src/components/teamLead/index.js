import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import Spinner from 'react-spinner-material';
import getTeams from '../../store/actions/teamActions';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from 'reactstrap';

class Teams extends Component {
    state = {
        teamLead: null
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
                        <div className = 'Card' key={team.id}>
                            <div className = 'CardBody'>
                                <h5 className = 'CardTitle'>Team Name: {team.name}</h5>
                                <h6 className = 'CardSubtitle'>Team Lead Id: {team.teamLead}</h6>

                            </div>
                        </div>
                    )
                })
            ) : 
            (
                <div className= 'center'>
                    No team listings yet.
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

Teams.propTypes = {
    getTeams: PropTypes.func.isRequired,

}

const mapStateToProps = state => ({
    teams: state.teams
})

export default connect(mapStateToProps, { getTeams })(Teams);