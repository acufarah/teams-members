import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import Spinner from 'react-spinner-material';
import getMembers from '../../store/actions/userActions';

class Members extends Component {
    state = {
        members: []
    }

    componentDidMount(){
        axios.get("https://tempo-exercises.herokuapp.com/rest/v1/users").then(res => {
            console.log(res);
            this.setState({members: res.data})
        })
    }

    render(){
        const { members } = this.state;
        console.log(members);
        const teamName = this.props.match.params.name;
        const teamId= this.props.match.params.id;
        console.log(teamName);
        console.log(teamId);
        const realMembers = members.filter(function(member){
            return member.teamId=== teamId;
        });
        console.log(realMembers);
                const memberListings = realMembers.length ? (
                realMembers.map( member => {
                    return (
                        <div className="card full-height shadow-lg p-3 mb-5 bg-white rounded" key={member.userId}>
                            <div className = 'card-body'>
                                <h5 className = 'card-title'>Member id: {member.userId}</h5>
                            </div>
                        </div>
                    )
                })
            ) : 
            (
                <div className= 'center'>
                    Loading Members.
                </div>
            )
        return (
            <div>
                <h1>{teamName}</h1>
                    <h4>
                    {memberListings}
                    </h4>
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