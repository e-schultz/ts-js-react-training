import React from "react";
import ReactJson from "react-json-view";
import "../styles.css";

import NumberList from "./number-list";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      even: [],
      odd: []
    };
  }

  async componentDidMount() {
    let { even, odd } = await import("../exercise-01");
    Promise.all([even, odd]).then(([even, odd]) => {
      this.setState(() => ({ even, odd }));
    });
  }

  render() {
    return (
      <>
      <section>
        <h1>Instructions</h1>
        <p>
          Open up src/exercise-01.js, 
        </p>
        <p>When the numbers promise resolves:</p>
        <ul>
          <li>Set odd to contain only the odd numbers in the response</li>
          <li>Set even to contain only the odd numbers in the response</li>
        </ul>
      </section>
      <section>
        <h1>Even Numbers</h1>
        <NumberList numbers={this.state.even} />
        <h1>Odd Numbers</h1>
        <NumberList numbers={this.state.odd} />
      </section>
      </>
    );
  }
}

export default App;
