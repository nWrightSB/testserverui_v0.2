import React, { Component } from 'react';
import { Link } from 'react-router';
import './NavLink.css';

class NavLink extends Component {
  render() {
    return (
      <Link to={this.props.to} className="navlink" activeClassName="active" >
        <div className="nav-link-container">
          {this.props.text}
        </div>
      </Link>
    )
  }
}

export default NavLink;