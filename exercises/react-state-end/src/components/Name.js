import React from "react";


// Step 1: Modify this component so that "Hello, name!" is shown while the user types their name

const NameInput = ({ onInput, inputValue }) => {
  const handleInput = event => {
    onInput(event.target.value)
  }
  
  return <input type="text" onInput={handleInput} defaultValue={inputValue} />
}

const Greeting = ({ name }) => <h1>Hello, {name}!</h1>

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name : ''};
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(value) {
    this.setState((state)=>({
      name: value
    }))
  }

  render() {
    return (
      <div>
        <Greeting name={this.state.name} />
        <NameInput onInput={this.handleInput} inputValue={this.state.name} />
      </div>
    )
  }
}

export default Name
