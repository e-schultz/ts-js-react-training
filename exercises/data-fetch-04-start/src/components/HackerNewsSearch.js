import React from 'react';

const API = 'https://hn.algolia.com/api/v1/search?';

class HackerNewsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: false
    };
   
  }
  componentDidMount() {
    this.query();
  }

  query() {
    this.setState({ isLoading: true });
    fetch(`${API}query=${this.props.query}`)
      .then(result => result.json())
      .then(({ hits }) => {
        this.setState({ results: hits, isLoading: false });
      });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.query !== this.props.query)  {
      this.query();
    }
  }
  
  render() {
    let { results, isLoading } = this.state;
    let { query } = this.props.query;
    return (
      <section>
       
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
