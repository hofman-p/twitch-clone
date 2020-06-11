import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/SideBar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;