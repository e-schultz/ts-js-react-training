import React from "react";

class HelloWorld extends React.Component {
  state = {
    count: 0
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      return {
        count: ++state.count
      };
    });
  }
  render() {
    return (
      <section>
        {`${this.props.text} - clicked ${this.state.count} times`}
        <button onClick={this.handleClick}>Click Me</button>
      </section>
    );
  }
}

export default HelloWorld;