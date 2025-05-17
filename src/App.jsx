import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer.jsx';
import About from './component/Page/About.jsx';
import Home from './component/Page/home.jsx';

function App() {
  return (
    <>

      <Header />
      {/* <div className='w-full h-screen bg-amber-400'> */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
     
      </Routes>
      {/* </div> */}
      <Footer />
    </>
  )
}

export default App
