import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

function NavBar(props){
    return(
        <nav className= "navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className='container'>
            <Link to='/' className='navbar-brand'>
                Teams/Users
            </Link>
            <button 
            className='navbar-toggler'
            type= 'button'
            data-toggle='collapse'
            data-target='#navbarMain'
            >
            <span className= 'navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarMain'>
                <ul className='navbar-nav mr-auto'>
                </ul>
            </div>
            <ul className= 'navbar-nav ml-auto'>
                <li className='nav-item'>
                        <Link to='/teamsDirectory' className='nav-link'>Teams Directory</Link>
                </li>
                <li className='nav-item'>
                        <Link to='/searchTeams' className='nav-link'>Team Search</Link>
                </li>
                <li className='nav-item'>
                        <Link to='/searchUsers' className='nav-link'>Search Users</Link>
                </li>

            </ul>

        </div>
        </nav>
    )
}

export default NavBar;
