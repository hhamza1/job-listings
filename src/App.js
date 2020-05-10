import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
