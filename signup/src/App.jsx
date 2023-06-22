import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Quiz from "./Components/Quiz";
import "./App.css";
import { UserProvider } from "./Context/userContext";

function App() {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={ <Signup />}/>
            <Route path='/login' element={ <Login />}/>
            <Route path='/quiz' element={ <Quiz />}/>
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
