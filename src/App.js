import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header'
import Banner from './components/Banner';

function App() {
  return (
    <div className="app">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
