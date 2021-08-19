import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
// import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const [jwt, setJWT] = useState("");
   let oView = null;
  let setJWTToken = (token) =>{
    setJWT(token);
  }

  oView = jwt ? <Home token ={jwt}/> : <LoginPage setJWTToken={setJWTToken}/>;
  
  return (
    <div className="App">
      {oView}
    </div>
  );
}

export default App;
