import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      query: props.initialQuery
    }
  }

  setQuery(query) {
    this.setState((state)=>({query}))
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ width: "100%", borderBottom: "1px solid black", padding: "1rem 1.25rem" }}>
          <input value={this.state.query} onChange={event => this.setQuery(event.target.value)} />
          <button type="submit">Search</button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
