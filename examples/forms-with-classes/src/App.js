import React, { Component } from "react";
import "./App.css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, fieldName) {
    this.setState({ [fieldName]: event.target.value });
  }

  handleSubmit(event) {
    alert(
      `A name was submitted: ${this.state.firstName} ${this.state.lastName}`
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>
            First Name:
          </span>
          <input
            type="text"
            value={this.state.firstName}
            onChange={event => this.handleChange(event, "firstName")}
          />
        </label>
        <label>
          <span>
            Last Name:
          </span>
          <input
            type="text"
            value={this.state.lastName}
            onChange={event => this.handleChange(event, "lastName")}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <NameForm />
      </div>
    );
  }
}

export default App;
