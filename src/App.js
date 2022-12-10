import { useEffect, useState } from 'react';
import Home from './components/Home'; 
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp'
import Login from './components/Login';
import Navbar from './components/NavBar';
import About from './components/About';

// function App() {

function App() {
  const [user, setUser] = useState(null);
  // const nav = useNavigate

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
  // if (!user) nav("/signup") 
  return(
    <div className='App'>
      <Routes>

      <Route path='/' element={<Navbar user={user}/>} />

        <Route path='/signup' element={<SignUp onLogin={setUser}/>}/>
      {/* </Routes> */}
      {/* <Routes> */}
        <Route path='/login' element={<Login onLogin={setUser}/>}/>
      {/* </Routes> */}
      {/* <Routes> */}
      <Route path="/home" element={<Home user={user}/>} />
      {/* </Routes> */}
      {/* <Routes> */}
      <Route path="/about" element={<About user={user}/>} />
      </Routes>
    </div>
  )
}

export default App;
