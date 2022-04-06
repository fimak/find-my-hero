import React from 'react';
import Button from '@mui/material/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Find my hero!
        </p>
        <Button
          className="App-button"
          href="/questions"
          variant="outlined"
        >
          Start
        </Button>
      </header>
    </div>
  );
}

export default App;
