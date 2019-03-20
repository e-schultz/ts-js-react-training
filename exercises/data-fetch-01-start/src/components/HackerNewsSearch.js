import React from "react";

const API = "https://hn.algolia.com/api/v1/search?query=react";

class HackerNewsSearch extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return <section>Waiting for results</section>;
  }
}

export default HackerNewsSearch;
