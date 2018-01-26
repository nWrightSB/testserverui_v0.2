import React, { Component } from 'react';
import './NavButton.css'

class NavButton extends Component {
  
  render() {
    return (
      <div>
        <button>{this.props.text}</button>
      </div>
    )
  }
}

export default NavButton;