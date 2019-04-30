import React from "react";
import { PLATFORMS, GAMES } from "../../data";
/* 
  general flow-notes:
  
  Up until this point we have generally been writing functional components that display the data that has passed in. 
  
  Currently they are not very interactive - such as responding to user input, events, or changes in data.

  State is data that changes over time - and in response to events, or user interaction
  
  Examples of State: 
  
    - currently selected items, 
    - current input values 
    - calculated totals / values 
    - currently applied filters
    - etc
  
  
  To better demonstrate this - we will be creating a cascading dropdown list.

  The end result that we will work towards:
    - two drop down lists
    - and a 'card' list that highlights the selected item

  We will start with a functional component, displaying a full list of platforms and games. 

  If we want to have the games list only show items for the selected platform, what do we need to do?

    - Keep track of the currently selected platform 
    - Filter the games list based on the platformId 

  To keep track of the selected platform, we will need to:

    - Respond to the onChange event 
    - Store the selected value in state 

  React wants us to be explicit about when state changes - it does not automatically dirty-check objects for us. To tell React that state has changed, we will need to 

  - Create a component that extends from React.Component
  - Set the initial state 
  - Implement the render function - this is similar to the return of functional components 
  - Implement an onChange handler 
  - call this.setState to tell React that the state has changed

*/

const CascadingDropdownExample = () => {
  return (
    <section>
      <select>
        <option value={-1}>All</option>
        {PLATFORMS.map(({ id, name }) => (
          <option value={id} key={id}>{name}</option>
        ))}
      </select>

      <select>
        <option value={-1}>All</option>
        {GAMES.map(({ id, name }) => (
          <option value={id}  key={id}>{name}</option>
        ))}
      </select>
    </section>
  );
};

export default CascadingDropdownExample;
