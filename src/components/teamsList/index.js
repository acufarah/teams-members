import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import Spinner from 'react-spinner-material';
import getTeams from '../../store/actions/teamActions';

class Teams extends Component {
    componentDidMount(){
        axios.get("https://tempo-exercises.herokuapp.com/rest/v1/teams")
        .then(res => {
            console.log(res)
        })
    }

    render(){
    return (
        <div>
        This is the list of teams
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