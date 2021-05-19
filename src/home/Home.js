import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <h2>Welcome to the Todos App!</h2>
        <ul>
          <li>Add todos on the Todos Page</li>
          <li>Or see all users shared todos on the Shared Todos Page</li>
        </ul>

        <Link to='/auth'>Sign in/Sign Up</Link>
      </div>
    );
  }

}