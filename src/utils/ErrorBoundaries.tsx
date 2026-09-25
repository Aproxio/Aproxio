import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Operational Error captured by ErrorBoundary:', error, info);
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-screen flex items-center justify-center bg-canvas p-6">
          <div className="max-w-md w-full p-8 border border-hairline bg-surface-muted text-center shadow-sm">
            <span className="material-symbols-outlined text-[40px] text-text-primary mb-3">
              warning
            </span>
            <h2 className="font-headline-sm text-2xl font-medium text-text-primary tracking-tight mb-2">
              System Anomaly Detected
            </h2>
            <p className="font-body-md text-sm text-text-secondary leading-relaxed mb-6">
              {this.state.error?.message || 'An unexpected operational failure occurred.'}
            </p>
            <button
              onClick={this.handleRetry}
              className="px-6 py-2.5 bg-text-primary text-canvas font-label-md text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Reload System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
