import React, { useState, useEffect } from "react";

const API = "https://hn.algolia.com/api/v1/search?";

let HackerNewsSearch = ({ query }) => {
  let [isLoading, setLoading] = useState(true);
  let [results, setResults] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}query=${query}`)
      .then(result => result.json())
      .then(({ hits }) => {
        setLoading(false);
        setResults(hits);
      });
  }, [query]);

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
};

export default HackerNewsSearch;
