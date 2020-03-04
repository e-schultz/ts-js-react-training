import React, { useState } from "react";

function SearchBar({ initialQuery, onSearch }) {
  let [query, setQuery] = useState(initialQuery);
  let handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={event => setQuery(event.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
