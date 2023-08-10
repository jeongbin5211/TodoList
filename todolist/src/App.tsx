import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./views/Todo";
import User from "./views/User";

function App() {
  return (
    <>
      <Todo />
      <Routes>
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
