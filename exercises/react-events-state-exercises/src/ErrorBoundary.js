import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorName: "", message: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorName: error.name, message: error.message };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>
            Open developer tools for more details.
          </p>
          {this.state.errorName}
          <br />
          {this.state.message}
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
