import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    console.log('Error boundary', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{ color: 'red' }}>{this.props.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
