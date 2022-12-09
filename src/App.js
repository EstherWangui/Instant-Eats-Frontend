import { useEffect, useState } from 'react';
// import Login from './components/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp'
import Login from './components/Login';

// function App() {

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://instant-eats-production.up.railway.app/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(null);
  }

  function handleLogout() {
    setUser(null);
  }

  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp onLogin={setUser}/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login onLogin={setUser}/>}/>
      </Routes>
      </BrowserRouter>

      {/* <Header user={user} onLogout={handleLogout} /> */}
      {/* <Login /> */}
    </div>
  )
}

export default App;
