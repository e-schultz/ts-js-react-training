class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jane Doe"
    };
  }

  handleInput(value) {
    this.setState(state => {
      return {
        name: value
      };
    });
  }

  render() {
    return (
      <section>
        <h1>Hello Class - my name is {this.state.name}</h1>
        <p>
          <input
            value={this.state.name}
            onChange={evt => this.handleInput(evt.target.value)}
          />
        </p>
      </section>
    );
  }
}