import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Todo from './views';

function App() {
  return (
    <>
      <Todo />
    </>
  );
}

export default App;
