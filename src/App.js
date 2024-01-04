import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';
import Home2 from './pages/Home2';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/add" element={<AddEdit/>}/>
          <Route path="/update/:id" element={<AddEdit/>}/>
          <Route path="/view/:id" element={<View/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/home2" element={<Home2/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}