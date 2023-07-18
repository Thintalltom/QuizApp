import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Quiz from "./Components/Quiz";
import MathQuiz from "./Components/mathQuiz";
import Questions from "./Components/Questions";
import QuestionInter from "./Components/QuestionInter";

import "./App.css";
import { UserProvider } from "./Context/userContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={ <Signup />}/>
            <Route path='/login' element={ <Login />}/>
            <Route path='/inter' element={ 
              <ProtectedRoute>
                <QuestionInter />
                  </ProtectedRoute>
             
                
           
          
           }/>
           <Route path="/quiz" element= {<Quiz />} />
           <Route path="/math" element= {<MathQuiz/>} />
           <Route path='/score' element={<Questions />} />
          </Routes>
        </Router>
        <ToastContainer 
     position='top-center'
     autoClose={2000}
     hideProgressBar={true}
     />
      </div>
    </UserProvider>
  );
}

export default App;
