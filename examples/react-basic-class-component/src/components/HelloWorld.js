import React from "react";

class HelloWorld extends React.Component {
  state = {
    text: "Hello World",
    count: 0
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      let count = state.count;
      count++;
      return {
        count
      };
    });
  }
  render() {
    return (
      <section>
        {`${this.state.text} - clicked ${this.state.count} times`}
        <button onClick={this.handleClick}>Click Me</button>
      </section>
    );
  }
}

export default HelloWorld;
