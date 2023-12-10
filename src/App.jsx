import React, { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Blank from './components/Blank'


function App() {
  AOS.init();

  return (
    <div className="container max-w-full h-screen bg-transparent">
      <div>
        <Section1 />
      </div>

      <div>
        <Section2 />
      </div>

      <div>
        <Section3 />
      </div>

      <div>
        <Section4 />
      </div>

      <div>
        <Blank />
      </div>
    </div>
  )
}

export default App
