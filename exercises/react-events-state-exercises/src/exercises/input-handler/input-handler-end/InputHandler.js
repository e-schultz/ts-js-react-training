import React from "react";


class InputHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      fieldValue: ""
    };
  }

  updateFieldValue(evt) {
    let fieldValue = evt.target.value;
    this.setState({
      fieldValue
    });
  }

  updateDisplayName() {
    
    this.setState((state) => {
      return {
        displayName: state.fieldValue,
        fieldValue: ''
      }
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
        <input value={this.state.fieldValue} onChange={event => this.updateFieldValue(event)}/>
        <button
            type="button"
            disabled={this.state.fieldValue.length === 0}
            onClick={evt => this.updateDisplayName()}
          >Set Name</button>
      </section>
    );
  }
}

export default InputHandler;
