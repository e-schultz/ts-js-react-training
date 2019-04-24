import { useState, useEffect } from "react";

const API = "https://hn.algolia.com/api/v1/search?";
let useHackerNews = query => {
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

  return {
    results,
    isLoading
  };
};

export default useHackerNews;
