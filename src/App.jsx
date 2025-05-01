import React, { useState } from 'react';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="app-container">
      <div className="card">
        <h1>Welcome to Puremo Beta!</h1>
        <p>This is a simple React app running inside a Docker container.</p>
        <button type="button" onClick={() => setClicked(!clicked)}>
          {clicked ? 'Clicked!' : 'Click Me'}
        </button>
      </div>
    </div>
  );
}

export default App;