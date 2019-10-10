import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Spin } from 'antd';

const Loadable = (importFunc) => {
  const LazyComponent = lazy(importFunc);
  return (props) => (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div style={{ paddingTop: 50, textAlign: 'center' }}>
            <Spin size="large" />
          </div>
        }
      >
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Loadable;
