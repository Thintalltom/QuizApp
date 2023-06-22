import { useState } from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "./App.css";
import { UserProvider } from "./Context/userContext";

function App() {
  return (
    <UserProvider>
      <div>
        <Signup />
        <Login />
      </div>
    </UserProvider>
  );
}

export default App;
