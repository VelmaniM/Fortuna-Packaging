import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('App error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Something went wrong</h1>
          <p className="text-silver mb-6">Please refresh the page to try again.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Refresh
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
