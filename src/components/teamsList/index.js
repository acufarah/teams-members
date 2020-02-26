import React, { Fragment, useEffect } from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import Spinner from 'react-spinner-material';
import getTeams from '../../store/actions';

const Teams = ({getTeams, teams: {teams, loading}}) => {
    
    useEffect( ()=> {
        getTeams();
    }, [getTeams]);
    
    return (
        <div>
        </div>
        )
}

Teams.propTypes = {
    getTeams: PropTypes.func.isRequired,
    teams: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    teams: state.teams
})

export default connect(mapStateToProps, { getTeams })(Teams);