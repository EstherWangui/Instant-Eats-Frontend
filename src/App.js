import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom';
import './App.css';

// function App() {

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/signup")
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => setUser(user));
      }
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home user={user}/>} />
      </Routes>
      </div>
  );
}

export default App;
