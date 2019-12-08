// Imports
import React from 'react';
// App Imports
import './App.css';
import Header from './components/header/Header';
import MainRouter from './mainRouter';

// Applications works in chrome browser and not in IE, please refer package json for supported browsers
function App() {
  return (
    <div className="App">
      <Header />
      <MainRouter />
    </div>
  );
}

export default App;
