import React, { useState, useEffect } from "react";

const API = "https://hn.algolia.com/api/v1/search?query=react";

function HackerNewsSearch() {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(API)
      .then(result => result.json())
      .then(({ hits }) => {
        setResults(hits);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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

export default HackerNewsSearch;
