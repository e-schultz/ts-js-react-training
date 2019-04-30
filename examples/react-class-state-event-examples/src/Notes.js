import React from "react";
const Notes = () => (
  <>
    <h1>Events & State </h1>

    <p>
      Up until this point, we have generally been writing functional components
      that display the data that has passed in.{" "}
    </p>

    <p>
      Currently, they are not very interactive - such as responding to user
      input, events, or changes in data.
    </p>

    <p>
      State is data that changes over time - and in response to events, or user
      interaction.
    </p>

    <p>Examples of State:</p>

    <ul>
      <li> currently selected items</li>
      <li> current input values </li>
      <li> calculated totals / values</li>
      <li> currently applied filters</li>
      <li> etc</li>
    </ul>

    <p>
      To better demonstrate this - we will be creating a cascading dropdown
      list. The result that we will work towards:
    </p>

    <ul>
      <li> two drop-down lists</li>
      <li> and a 'card' list that highlights the selected item</li>
    </ul>
    <p>
      We will start with a functional component, displaying a full list of
      platforms and games.{" "}
    </p>

    <p>
      If we want to have the games list only show items for the selected
      platform, what do we need to do?
    </p>
    <ul>
      <li> Keep track of the currently selected platform </li>
      <li> Filter the games list based on the platform </li>
    </ul>

    <p>To keep track of the selected platform, we will need to:</p>

    <ul>
      <li> Respond to the onChange event </li>
      <li> Store the selected value in state </li>
    </ul>

    <p>
      React wants us to be explicit about when state changes - it does not
      automatically dirty-check objects for us. To tell React that state has
      changed, we will need to{" "}
    </p>

    <ul>
      <li> Create a component that extends from React.Component</li>
      <li> Set the initial state </li>
      <li>
        {" "}
        Implement the render function - this is similar to the return of
        functional components{" "}
      </li>
      <li> Implement an onChange handler </li>
      <li> call this.setState to tell React that the state has changed</li>
    </ul>
  </>
);

export default Notes;
