import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const FrontendHelloworld = React.lazy(
  () => import('frontend-helloworld/Module')
);

const FrontendHeader = React.lazy(() => import('frontend-header/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/frontend-helloworld">FrontendHelloworld</Link>
        </li>

        <li>
          <Link to="/frontend-header">FrontendHeader</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="frontend-shell" />} />

        <Route path="/frontend-helloworld" element={<FrontendHelloworld />} />

        <Route path="/frontend-header" element={<FrontendHeader />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
