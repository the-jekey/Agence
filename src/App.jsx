import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './Components/agence/Agence'
import Project from './Components/peojects/Project'
import LocomotiveScroll from 'locomotive-scroll';
import Stair from './Components/common/Stair'
import Navbar from './Components/Navigation/Navbar'
import FullNavbar from './Components/Navigation/FullNavbar'



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='selection:bg-[#d3fd50] selection:text-black text-white bg-white '>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App
