import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1>Welcome to puremo!</h1>
        <p>This is a simple React app.</p>
        <button type="button" onClick={() => console.log('Button clicked!')}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;