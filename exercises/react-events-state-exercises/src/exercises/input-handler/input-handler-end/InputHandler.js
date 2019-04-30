import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.onNameChange(this.state.value);

    this.setState({
      value: ""
    });
  }

  setName(value) {
    this.setState({
      value: value
    });
  }
  render() {
    return (
      <form onSubmit={evt => this.handleSubmit(evt)}>
        <h1>Hello there, please enter a name:</h1>
        <input
          value={this.state.value}
          onChange={evt => this.setName(evt.target.value)}
        />
        <hr />
        <button type="submit" disabled={this.state.value.length === 0}>
          Submit the Name: {this.state.value}
        </button>
        <br />
      </form>
    );
  }
}

class InputHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: ""
    };
  }

  updateName(name) {
    this.setState({
      displayName: name
    });
  }

  clearName() {
    this.setState({ displayName: "" });
  }
  render() {
    return (
      <section>
        <div>
          <h1>Hello {this.state.displayName}!</h1>
          <button
            type="button"
            disabled={this.state.displayName.length === 0}
            onClick={evt => this.clearName()}
          >
            Clear Name
          </button>
        </div>

        <NameForm onNameChange={name => this.updateName(name)} />
      </section>
    );
  }
}

export default InputHandler;
