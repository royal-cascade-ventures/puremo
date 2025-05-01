import React, { useState } from 'react';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="app-container">
      <div className="card">
        <h1>Welcome to Puremo Life</h1>
        <p>We offer Moringa Powder and Tablets.</p>
        <button type="button" onClick={() => setClicked(!clicked)}>
          {clicked ? 'Clicked!' : 'Click Me'}
        </button>
      </div>
    </div>
  );
}

export default App;
