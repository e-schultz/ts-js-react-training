import React from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=react';

class HackerNewsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API)
      .then(result => result.json())
      .then(({ hits }) => {
        this.setState({ results: hits, isLoading: false });
      });
  }

  render() {
    let { results, isLoading } = this.state;
    return isLoading ? (
      <div>...... please wait</div>
    ) : (
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
