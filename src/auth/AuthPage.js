import { Component } from 'react';
import './AuthPage.css';

export default class AuthPage extends Component {
  state = {
    isSignUp: true

  }
  handleSwitch = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  }

  handleSubmit = e => {
    e.preventDefault();
  }
  render() {
    const { isSignUp } = this.state;

      
    return (
      <form className="AuthPage" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Name</span>
            <input name="name"/>
          </label>
        </p>
        <p>
          <label>
            <span>Email</span>
            <input name="email"/>
          </label>
        </p>
        <p>
          <label>
            <span>Password</span>
            <input name="password"/>
          </label>
        </p>
        <p>
          <button>Sign {isSignUp ? 'up' : 'in'}</button>
        </p>
        <p>
          <button className="switch" onClick={this.handleSwitch}>
            {isSignUp ? 'Already have an account?' : 'Need to create an account?'}
          </button>
        </p>
      </form>
    );
  }

}