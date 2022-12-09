import { useEffect, useState } from 'react';
import Home from './components/Home'; 
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp'
import Login from './components/Login';

// function App() {

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  // function handleLogin(user) {
  //   setUser(null);
  // }

  // function handleLogout() {
  //   setUser(null);
  // }

  return(
    <div className='App'>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/signup' element={<SignUp onLogin={setUser}/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login onLogin={setUser}/>}/>
      </Routes>
      <Routes>
      <Route path="/home" element={<Home user={user}/>} />
      </Routes>
      {/* </BrowserRouter> */}

      {/* <Header user={user} onLogout={handleLogout} /> */}
      {/* <Login /> */}
    </div>
  )
}

export default App;
