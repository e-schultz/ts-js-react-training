import React from "react";
/*
Instructions:

Update the InputHandler so that:

- The input field sets it's value to the state.fieldValue
- Add an onChange handler so as the user types - the fieldValue gets updated
- When the user clicks on "Set Name"
  - it sets the displayName to what was entered in the field
  - it clears the fieldValue 

- Extra:

  - Have the "Clear Name" button be disabled until there is a display value
  - Have the "Set Name" button be disabled if there is no inout value
  -

*/
class InputHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      fieldValue: ""
    };
  }

  /* add an event handler for onChange for the inut field */

  updateDisplayName = () => {
    this.setState((state) => {
      // return a new state object seting the displayName to the field value
     return state;
    });
  }
  
  clearDisplayName() {
    
  }

  render() {
    return (
      <section>
        <div>
          <h1>Hello {this.state.displayName}!</h1>
          {/* attach an event handler so when the user clicks the button, display name is reset */}
          <button
            type="button"
          >
            Clear Name
          </button>
        </div>
        {/* bind value to the state.fieldValue, and setup an onChange handler */}
        <input />
        <button
          type="button"
          onClick={evt => this.updateDisplayName()}
        >
          Set Name
        </button>
      </section>
    );
  }
}

export default InputHandler;
