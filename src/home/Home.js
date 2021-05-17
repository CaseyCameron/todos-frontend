import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h2>Todos</h2>

        <Link to='/auth'>Sign in/Sign Up</Link>
      </div>
    );
  }

}