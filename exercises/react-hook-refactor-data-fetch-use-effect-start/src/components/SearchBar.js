import React, { useState } from "react";

function SearchBar({ initialQuery, onSearch }) {
  let [query, setQuery] = useState(initialQuery);
  let handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          width: "100%",
          borderBottom: "1px solid #e6e6e6",
          padding: "1rem 1.25rem"
        }}
      >
        <input value={query} onChange={event => setQuery(event.target.value)} />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;
