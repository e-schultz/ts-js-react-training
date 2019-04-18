import React from "react";
const API = "https://hn.algolia.com/api/v1/search?";
class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.query();
  }

  query() {
    if (this.props.query.length >= 1) {
      this.setState({ isLoading: true });
      fetch(`${API}query=${this.props.query}`)
        .then(result => result.json())
        .then(({ hits }) => {
          this.setState({ results: hits, isLoading: false });
        });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    let currentState = { ...this.state };
    let currentProps = { ...this.props };

    console.group("shouldComponentUpdate");
    console.log({ nextProps, currentProps });
    console.log({ nextState, currentState });
    console.groupEnd();
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    let currentState = { ...this.state };
    let currentProps = { ...this.props };

    console.group("componentDidUpdate");
    console.log({ prevProps, currentProps });
    console.log({ prevState, currentState });
    console.groupEnd();
    // first:
    //  leave shouldComponentUpdate returning true
    //  and remove this conditional check - what happens?
    // second:
    //  in shouldComponentUpdate - return false
    //  if the query has not changed
    if (prevProps.query !== this.props.query) {
      this.query();
    }
  }
  render() {
    console.log("render called");
    return (
      <section>
        <h1>Results for {this.props.query}</h1>

        <ul>
          {this.state.results.map(result => {
            return (
              <li key={result.objectID}>
                <a href={result.url}>{result.title}</a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default SearchResults;
