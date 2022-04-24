import React from 'react';

function ErrorBanner({error,message}) {
  return (
    <div className="error-banner">
      <span>{error}</span>
      <p>«{message}»</p>
    </div>
  );
}

export default ErrorBanner;