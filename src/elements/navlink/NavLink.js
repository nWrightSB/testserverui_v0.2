import React, { Component } from 'react';
import { Link } from 'react-router';
import './NavLink.css'

class NavLink extends Component {
  render() {
    return (
      <div className="nav-link-container">
        <Link to={this.props.to} className="navlink" activeClassName="active">
          {this.props.text}
        </Link>
      </div>
    )
  }
}

export default NavLink;