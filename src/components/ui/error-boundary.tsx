'use client'

import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('3D Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="h-full w-full bg-black flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h2 className="text-2xl font-light mb-4 tracking-widest">
              3D Display Error
            </h2>
            <p className="text-white/70 font-mono text-sm mb-4">
              Your browser may not support WebGL or 3D graphics.
            </p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 border border-white/20 rounded-lg text-white/70 hover:text-white transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}