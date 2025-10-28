// ErrorPage.jsx
import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  const status = error?.status || error?.statusCode || null;
  const statusText = error?.statusText || error?.message || 'Something went wrong';

  console.error('Route error:', error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl font-bold text-[#632EE3] mb-4">{status ?? '😵'}</div>
        <h1 className="text-2xl font-semibold mb-2">Oops — something went wrong</h1>
        <p className="text-gray-600 mb-4">{statusText}</p>

        {error?.data && (
          <pre className="text-left text-sm bg-gray-100 p-3 rounded mb-4 overflow-auto">
            {typeof error.data === 'string' ? error.data : JSON.stringify(error.data, null, 2)}
          </pre>
        )}

        <div className="flex justify-center gap-4">
          <Link to="/" className="btn btn-sm bg-[#632EE3] text-white">
            Go Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-sm bg-gray-200"
          >
            Retry
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          If the problem persists, contact support or check the console for details.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
