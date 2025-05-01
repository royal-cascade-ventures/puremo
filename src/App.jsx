import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="card">
      <h1>Welcome to Puremo Beta, v2!</h1>
      <p>This is a Puremo Beta Version 2.</p>
        <button type="button" onClick={() => console.log('Button clicked!')}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;