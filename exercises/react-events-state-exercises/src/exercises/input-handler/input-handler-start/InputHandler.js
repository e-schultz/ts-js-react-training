import React from "react";
/*
Instructions:

- Implement NameForm to have an Input field that updates the this.state.value
- On NameForm - disable the button if there is no name entered (string length of zero)
- On NameForm - clear/set the value to an empty string after submit
- Implement InputHandler.updateName to set the `displayName` to the submitted value of the NameForm
- Add a button to InputHandler that will clear the `displayName` if the user clicks it
- Have the button be disabled if there is no value for `displayName`

*/
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
  }

  render() {
    return (
      <form onSubmit={evt => this.handleSubmit(evt)}>
        <h1>Hello there, please enter a name:</h1>
        <div>
          Replace this div with an input that will update the state value as the
          user enters a name.
        </div>
        <hr />
        <button type="submit">Submit the Name: {this.state.value}</button>
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

  updateName(name) {}

  render() {
    return (
      <section>
        <div>
          <h1>Hello {this.state.displayName}!</h1>
        </div>

        <NameForm onNameChange={name => this.updateName(name)} />
      </section>
    );
  }
}

export default InputHandler;
