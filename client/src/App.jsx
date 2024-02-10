import React from 'react'
import './App.css'
import Spin from './components/Spinner'
import Home from './pages/Home'
import CreateBook from './pages/CreatBook'
import DeletBook from './pages/DeletBook'
import EditBook from './pages/EditBook'
import { Routes, Route } from 'react-router-dom'
import ShowBook from './pages/ShowBook'



function App() {


  return (

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/books/edit/:id' element={<EditBook />}></Route>
      <Route path='/books/details/:id' element={<ShowBook />}></Route>
      <Route path='/books/delete/:id' element={<DeletBook />}></Route>
      <Route path='/books/create' element={<CreateBook />}></Route>
    </Routes>

  )
}

export default App
