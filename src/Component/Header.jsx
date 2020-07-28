import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { NavLink } from 'react-router-dom'
const Header = ({ backButton }) => {
    return (
        <div className="header">
            <IconButton>
                {backButton ? (
                    <NavLink to={backButton}>
                        <ArrowBackIosIcon fontSize="large" className="header__icon" /></NavLink>
                ) : (
                        <PersonIcon fontSize="large" className="header__icon" />
                    )}
            </IconButton>
            <NavLink to="/">
                <IconButton>
                    <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo" className="header__logo" />
                </IconButton>
            </NavLink>
            <NavLink to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>
            </NavLink>

        </div>
    )
}

export default Header
