import React from 'react';
import { Link } from 'react-router';
import './NavLink.css';

const NavLink = props => {
  return (
    <Link {...props} to={props.to} className="navlink" activeClassName="active">
      <div className="nav-link-container">
        {props.text}
      </div>
    </Link>
  )
}

export default NavLink;