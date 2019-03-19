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
    let count = this.state.count;
    count++;
    this.setState({ count }, ()=>{
        this.props.onValueChange(this.state.count);
    });
  }
  render() {
    return (
      <section style={{height: '30vh', width: '80vh', border: "1px solid black"}}>
        {`${this.state.text} - clicked ${this.state.count} times`}
        <button onClick={this.handleClick}>Click Me</button>
      </section>
    );
  }
}

export default HelloWorld;
