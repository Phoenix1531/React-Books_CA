import {React,useState,useContext} from 'react'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import Form from './components/Form';
import ParentContext, { AppContext } from './context/ParentContext'
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}></Route>
      </Routes>
      <ParentContext/>
    </>
  )
}

export default App
