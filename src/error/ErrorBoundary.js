import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { error };
  }

  render() {
    if (this.state.error === "503") {
      return (
        <div>
          <h1>Something went wrong.</h1>
        </div>
      );
    }
    if (this.state.error === "500") {
      return (
        <div>
          <h1>Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
