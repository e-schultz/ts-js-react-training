import React, { useState } from "react";
import "./App.css";
import HackerNewsSearch from "./components/HackerNewsSearch";
import SearchBar from "./components/SearchBar";

function App() {
  const [query, setQuery] = useState("react");
  return (
    <div className="App">
      <SearchBar
        initialQuery={query}
        onSearch={searchTerm => setQuery(searchTerm)}
      />
      <HackerNewsSearch query={query} />
    </div>
  );
}

export default App;
