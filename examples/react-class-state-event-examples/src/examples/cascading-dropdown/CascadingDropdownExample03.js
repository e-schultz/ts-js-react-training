import React from "react";
import { PLATFORMS, GAMES } from "../../data";

class CascadingDropdownExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platforms: [...PLATFORMS],
      games: [...GAMES],
      selectedPlatformId: -1,
      selectedPlatform: undefined,
      selectedGameId: -1
    };
  }

  onSelectedPlatformChange = event => {
    this.setState({
      selectedPlatformId: parseFloat(event.target.value)
    });
  };

  onSelectedGameChange = event => {
    this.setState({
      selectedGameId: parseFloat(event.target.value)
    });
  };

  render() {
    const filteredGames = filterGames(
      this.state.selectedPlatformId,
      this.state.games
    );
    return (
      <section>
        <SelectList
          items={this.state.platforms}
          value={this.state.selectedPlatformId}
          onChange={this.onSelectedPlatformChange}
        />

        <SelectList
          items={filteredGames}
          value={this.state.selectedGameId}
          onChange={this.onSelectedGameChange}
        />

        {filteredGames.map(game => (
          <Block
            borderColor={
              game.id === this.state.selectedGameId ? "red" : "black"
            }
          >
            {game.name}
          </Block>
        ))}
      </section>
    );
  }
}

/* 
  general flow-notes
  - up until this point we have generally been writing functional components, that display the data that has passed in
  - but, they are not very interactive - such as responding to user input, events, or changes in data 
  - state is data that changes over time - and in response to events, or user interaction
  - examples of state can be currently selected items, current values, input fields, etc 
  - to better demonstrate this - we will be creating a cascading dropdown list 
  - show the end result that we will work towards
    - two drop down lists
    - and a 'card' list that highlights the selected item
  - start with a functional component
    - renders a select list of platforms 
    - add a second select list of games
  - ask: how do we filter the games list based on the selected platform?
  - answer: we need to keep track of the selected platformId - and use that to filter the games list. 
  - ask: how do we keep track of the selected platform?
  - answer: need to keep track of that in state, and respond to events 
  - refactor component to be a class based component 
*/

function Block({ borderColor = "black", children }) {
  return (
    <div
      style={{
        border: `2px solid ${borderColor}`,
        display: "block",
        height: "1rem",
        padding: "1rem",
        margin: "1rem",
        width: "75%"
      }}
    >
      {children}
    </div>
  );
}

function filterGames(platformId = -1, games) {
  return games.filter(
    game => platformId === -1 || game.platformId === platformId
  );
}

const SelectList = ({ items, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value={-1}>All</option>
      {items.map(({ id, name }) => (
        <option value={id}>{name}</option>
      ))}
    </select>
  );
};

export default CascadingDropdownExample;
