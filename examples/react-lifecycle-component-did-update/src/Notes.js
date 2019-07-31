import React from "react";
function Notes() {
  return (
    <div className="content">
      <p>
        Open the DevTools console - and notice how often componentDidUpdate,
        componentShouldUpdate, and render are called.
      </p>
      <p>
        The Input field is setting this.state.inputValue, and when clicking the
        button it sets this.state.searchTerm to the search value.
      </p>
      <p>
        The SearchResults component only relies on this.state.searchTerm being
        passed down as a prop. However:
      </p>
      <ul>
        <li>shouldComponentUpdate</li>
        <li>componentDidUpdate</li>
        <li>render</li>
      </ul>
      <p>are called for every keystroke.</p>
      <h3 className="text-center">What actually gets rendered?</h3>
      <p>
        Open up the Chrome Dev Tools, and enable Paint Flashing. This will flash
        sections of the screen that are updated. Notice how even though render
        is being called for evey keystroke - React is not actually painting the
        results.
      </p>
      <p>
        Since these are being called on every update cycle - we need to prevent
        the API from being called on every keystroke.
      </p>
      <p>
        To do this, we need to compare the previous props to the current props
        in componentDidUpdate.
      </p>
    </div>
  );
}

export default Notes;
