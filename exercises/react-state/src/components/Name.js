import React from "react";


// Step 1: Modify this component so that "Hello, name!" is shown while the user types their name

const NameInput = ({ onInput, inputValue }) => {
  const handleInput = event => {
    console.log(event.target.value)
  }
  return <input type="text" onInput={handleInput} value={inputValue} />
}

const Greeting = ({ name }) => <h1>Hello, {name}!</h1>

class Name extends React.Component {
  constructor(props) {
    super(props);

    // Set the initial state
  }

  handleInput() {
    // Set the state for the input
  }

  render() {
    return (
      <div>
        <Greeting name="" />
        <NameInput onInput={this.handleInput} inputValue="" />
      </div>
    )
  }
}

export default Name
