import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  handleSignOut = () => {
    window.localStorage.clear();
    window.location.reload();

  }

  render() {
    return (
      <header className="Header">
        <h1>Todo App</h1>
        <NavLink to="/todos">Todos Page</NavLink>
        <NavLink to="/shared">Shared Todos Page</NavLink>
        <NavLink to="/auth" onClick={this.handleSignOut}>Sign Out</NavLink>
      </header>
    );
  }

}

export default Header;