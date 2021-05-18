import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import AuthPage from '../auth/AuthPage';
import TodoPage from '../todos/TodosPage';
import SharedPage from '../sharedtodos/SharedPage';
import './App.css';

class App extends Component {
  state = {
    token: window.localStorage.getItem('TOKEN')
  }

  handleUser = user => {
    window.localStorage.setItem('TOKEN', user.token);
    this.setState({ token: user.token });
  }
  render() {
    const { token } = this.state;

    return (
      <div className="App">
        <Router>
          <Header />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/auth" exact={true}
                render={routerProps => (
                  <AuthPage {...routerProps}
                    onUser={this.handleUser}
                  />
                )}
              />

              <Route path="/shared" exact={true}
                render={routerProps => (
                  token ? <SharedPage {...routerProps} />
                    : <Redirect to="/auth" />
                )}
              />

              <Route path="/todos" exact={true}
                render={routerProps => (
                  token ? <TodoPage {...routerProps} />
                    : <Redirect to="/auth" />
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;
