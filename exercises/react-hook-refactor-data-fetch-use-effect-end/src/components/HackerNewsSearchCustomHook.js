import React from "react";

import useHackerNews from "../hooks/useHackerNews";

let HackerNewsSearch = ({ query }) => {
  let { isLoading, results } = useHackerNews(query);

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
