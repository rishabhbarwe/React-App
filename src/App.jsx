import React from 'react'
import SignUp from './SignUp';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/about' element={<About />}></Route>

      </Routes>


    </BrowserRouter>

  
  )
}

export default App