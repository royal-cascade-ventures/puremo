import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1>Welcome to React with Docker!</h1>
        <p>This is a simple React app running inside a Docker container.</p>
        <button type="button">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;