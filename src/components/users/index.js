import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import Spinner from 'react-spinner-material';

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount(){
        axios.get("https://tempo-exercises.herokuapp.com/rest/v1/users").then(res => {
            console.log(res);
            this.setState({users: res.data})
        })
    }

    render(){
        const { users } = this.state;
        console.log(users);
        const userListings = users.length ? (
                users.map( user => {
                    return (
                        <div className="card full-height shadow-lg p-3 mb-5 bg-white rounded" key={user.userId}>
                            <div className = 'card-body'>
                                <h5 className = 'card-title'>User id: {user.userId}</h5>
                                <h6 className = 'card-subtitle'>Team id: {user.teamId}</h6>
                            </div>
                        </div>
                    )
                })
            ) : 
            (
                <div className= 'center'>
                    Loading Users
                </div>
            )
        return (
            <div>
                <h3>{userListings}</h3>
            </div>
            )
    }
}

export default Users;