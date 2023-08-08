import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./views";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import User from "./views/User";

function App() {
  return (
    <>
      <Todo />
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
