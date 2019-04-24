import React, { useState } from "react";
// import HackerNewsSearch from "./components/HackerNewsSearch";
import HackerNewsSearch from "./components/HackerNewsSearchCustomHook";
import SearchBar from "./components/SearchBar";

function App() {
  let [query, setQuery] = useState('react');
  return  (
    <div className="App">
      <SearchBar
        initialQuery={query}
        onSearch={event => setQuery(event)}
      />
      <HackerNewsSearch query={query}/>
    </div>
  );
}

export default App;
