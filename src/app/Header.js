import { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>Todo</h1>
        <NavLink to="/todos">Todos Page</NavLink>
      </header>
    );
  }

}
 
export default Header;