import React, { useState, useEffect } from "react";

const API = "https://hn.algolia.com/api/v1/search?query=react";

function HackerNewsSearch(props) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(result => result.json())
      .then(({ hits }) => {
        setResults(hits);
      });
  }, []);
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

export default HackerNewsSearch;
