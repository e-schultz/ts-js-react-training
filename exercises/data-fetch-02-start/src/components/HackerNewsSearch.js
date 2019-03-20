import React from "react";

const API = "https://hn.algolia.com/api/v1/search?query=react";

class HackerNewsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  componentDidMount() {
    fetch(API)
      .then(result => result.json())
      .then(({ hits }) => {
        this.setState({ results: hits });
      });
  }

  render() {
    let { results } = this.state;
    return (
      <ul>
        {results.map(result => {
          return (
            <li key={result.objectID}>
              <a href={result.url}>{result.title}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default HackerNewsSearch;
