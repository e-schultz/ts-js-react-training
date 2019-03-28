import React, { useState } from "react";
function SearchBar({ initialQuery, onSearch }) {
  let [query, setQuery] = useState(initialQuery);
  let handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: "75vw", height: "2rem", border: "1px solid black" }}>
        <input value={query} onChange={event => setQuery(event.target.value)} />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;
