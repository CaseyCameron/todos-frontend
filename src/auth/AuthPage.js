import { Component } from 'react';
import { signUp, signIn } from '../utils/todo-api.js';
import './AuthPage.css';

export default class AuthPage extends Component {
  state = {
    isSignUp: true,
    name: '',
    email: '',
    password: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  }

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  }

  handleSwitch = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { isSignUp } = this.state;
    const { onUser, history } = this.props;
    

    try {
      const action = isSignUp ? signUp : signIn;
      const user = await action(this.state);
      onUser(user);
      history.push('/');
    }

    catch (err) {
      console.log(err.message);
    }

  }

  render() {
    const { isSignUp, name, email, password } = this.state;

    return (
      <form className="AuthPage" onSubmit={this.handleSubmit}>
        {isSignUp &&
          <p>
            <label>
              <span>Name</span>
              <input name="name" value={name} required={true}
                onChange={this.handleNameChange}
              />
            </label>
          </p>}
        <p>
          <label>
            <span>Email</span>
            <input name="email" value={email} required={true}
              onChange={this.handleEmailChange}
            />
          </label>
        </p>
        <p>
          <label>
            <span>Password</span>
            <input name="password" type="password" value={password} required={true}
              onChange={this.handlePasswordChange}
            />

          </label>
        </p>
        <p>
          <button type="submit">Sign {isSignUp ? 'up' : 'in'}</button>
        </p>
        <p>
          <button type="button" className="switch" onClick={this.handleSwitch}>
            {isSignUp ? 'Already have an account?' : 'Need to create an account?'}
          </button>
        </p>
      </form>
    );
  }

}