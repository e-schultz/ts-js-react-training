import React from 'react';

const API = 'https://hn.algolia.com/api/v1/search?';

class HackerNewsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: false,
      query: 'react'
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    this.query();
  }

  query() {
    this.setState({ isLoading: true });
    fetch(`${API}query=${this.state.query}`)
      .then(result => result.json())
      .then(({ hits }) => {
        this.setState({ results: hits, isLoading: false });
      });
  }
  handleSearch(event) {
    console.log('hi');
    this.setState({ query: event.target.value }, () => {
      this.query();
    });
  }
  render() {
    let { results, isLoading, query } = this.state;
    return (
      <section>
        <input onBlur={this.handleSearch} defaultValue={query} />
        {isLoading ? (
          <div>...... please wait while searching for {query} </div>
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
        )}
      </section>
    );
  }
}

export default HackerNewsSearch;
