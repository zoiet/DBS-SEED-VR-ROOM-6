import React, { Component } from 'react';
import './App.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    return this.setState({ error: '' });
  }

  handleUsernameChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePasswordChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    return (
      <div className="Login">
          <nav class="navbar navbar-dark bg-danger">
            <div className="row col-12 d-flex justify-content-center text-white">
            <span className="h3">Login</span>
            </div>
        </nav>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group text-center">
          <label>User Name: </label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUsernameChange} />
          </div>

          <div className="form-group text-center">
          <label>Password: </label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </div>

          <div className="form-group text-center">
          <input className="btn btn-danger" type="submit" value="Log In" data-test="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
