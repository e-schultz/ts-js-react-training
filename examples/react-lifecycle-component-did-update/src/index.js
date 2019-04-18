import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import SearchResults from "./SearchResults";
import Notes from "./Notes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      searchTerm: ""
    };
  }
  updateValue(event) {
    const inputValue = event.target.value;
    this.setState(state => ({
      inputValue
    }));
  }

  doSearch() {
    this.setState(state => ({
      searchTerm: state.inputValue
    }));
  }
  render() {
    return (
      <section className="section">
        <div className="App container">
          <h1 className="title">componentDidUpdate Example</h1>
          <div className="columns">
            <div className="column is-three-fifths">
              <Notes />
            </div>
            <div className="column ">
              <input
                className="input"
                type="text"
                value={this.state.inputValue}
                onChange={event => this.updateValue(event)}
              />

              <button
                className="button is-primary"
                onClick={() => this.doSearch()}
              >
                Search
              </button>

              <hr />
              <SearchResults query={this.state.searchTerm} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
