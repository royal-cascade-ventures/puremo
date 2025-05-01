import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1>Welcome to Puremo!</h1>
        <p>This is a simple React app running inside a Docker container.</p>
        <button onClick={() => alert('Button clicked!')}>Click Me</button>
      </div>
    </div>
  );
}

export default App;