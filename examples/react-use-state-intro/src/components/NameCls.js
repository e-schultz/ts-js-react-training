import React from "react";

export class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.onClick = this.onClick.bind(this);
  }
  setName(name) {
    this.setState(state => {
      return {
        name
      };
    });
  }

  onClick() {
    alert(this.state.name);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={evt => this.setName(evt.target.value)}
          value={this.state.name}
        />
        <button type="button" onClick={this.onClick}>
          Hello {this.state.name}!
        </button>
      </div>
    );
  }
}

export default Name;
