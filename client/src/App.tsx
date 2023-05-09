import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes, { renderRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <Router>{renderRoutes(routes)}</Router>
    </div>
  );
}

export default App;
