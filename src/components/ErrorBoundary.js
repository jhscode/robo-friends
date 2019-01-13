import React, { Component } from 'react';

class ErrorBoundary extends Component {
  // making a class with the constructor as it is still valid to use.
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if(this.state.hasError) {
      return <h1>Ooops. We're checking out what's wrong!</h1>
    }
      return this.props.children;
  }
}

export default ErrorBoundary;