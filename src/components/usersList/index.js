import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import Spinner from 'react-spinner-material';
import getMembers from '../../store/actions/userActions';

class Members extends Component {
    state = {
        teams: []
    }

    componentDidMount(){
        axios.get("https://tempo-exercises.herokuapp.com/rest/v1/users")
        .then(res => {
            console.log(res)
        })
    }

    render(){
        const { users } = this.state;
        return (
            <div>
            This is the list of members
            </div>
            )
    }
}
Members.propTypes = {
    getMembers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    members: state.members
})

export default connect(mapStateToProps, { getMembers })(Members);