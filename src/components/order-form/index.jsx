import React from 'react';
import './style.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    console.log('handleEmailChange', this);
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    console.log('handlePasswordChange', this);
    this.setState({ password: event.target.value });
  }

  handleRepeatPasswordChange(event) {
    console.log('handleReapetPasswordChange', this);
    this.setState({ repeatPassword: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('form submitted and values is', this.state.email, this.state.password, this.state.repeatPassword);
  }

  render() {
    return (
      <div>
        <form className="col white-box" onSubmit={this.handleSubmit}>
          <div className="col">
            <h2>Fill in the form!</h2>
          </div>
          <div className="col">
            <br />
            <label htmlFor="email">Email</label>
            <input
              value={this.state.email}
              onChange={this.handleEmailChange}
              id="email"
              type="text"
              className="form-control black-border"
              placeholder="example@gmail.com"
              aria-label="Email"
            />
          </div>
          <div className="col">
            <br />
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              id="password"
              type="text"
              className="form-control black-border"
              placeholder="*******"
              aria-label="Phone number"
            />
          </div>
          <div className="col">
            <br />
            <label htmlFor="repeatPassword">Repeat assword</label>
            <input
              value={this.state.repeatPassword}
              onChange={this.handleRepeatPasswordChange}
              id="repeatPassword"
              type="text"
              className="form-control black-border"
              placeholder="*******"
              aria-label="Phone number"
            />
          </div>
          <div className="col-12">
            <br />
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default Form;
