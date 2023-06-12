import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { LuSearch } from "react-icons/lu";
import { BiBell } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <div className="header">
            <div className='header-left'>
                <LuSearch size={20} className='header-left--icon' />
                <input className='header-left--search' placeholder='Search your items' />
            </div>
            <div className="header-right">
                <div className='notification'><BiBell size={20} className='notification-icon' /></div>
                <img src='https://avaelgo.ro/wp-content/uploads/2020/04/Radu-Stefan-Profile-Picture-200x200-px.png' className='avatar' />
                <div className='username '>
                    <p className='avatar-name'>Age Clinic</p>
                    <FaChevronDown className='chevron-down' />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    // currentUser: selectCurrentUser,
    // hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);