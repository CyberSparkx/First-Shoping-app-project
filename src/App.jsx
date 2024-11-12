import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Details from './components/details'
import Create from './utils/Create'
const App = () => {
  return (

    <>


  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/details/:id" element={<Details/>} />
  <Route path="/Create" element={<Create/>} />
  </Routes> 
  </>

  )
}

export default App