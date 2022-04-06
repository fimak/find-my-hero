import React from 'react';
import Button from '@mui/material/Button';

import AppContextProvider from './AppContext';

import './App.css';

function App() {
  return (
    <AppContextProvider>
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
    </AppContextProvider>
  );
}

export default App;
