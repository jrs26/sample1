import './App.css';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [ user, setLoginUser ] = useState({})

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user && user._id ? < Homepage setLoginUser={setLoginUser}/> : < Login setLoginUser={setLoginUser}/>}></Route>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
