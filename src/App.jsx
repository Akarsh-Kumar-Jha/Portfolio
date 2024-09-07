import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Parallax from './components/Parallax'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'



function App() {
  const [count, setCount] = useState(0)

  return (
<>
  <div>
    <section id='HomePage' className='h-screen snap-center overflow-y-hidden'>
    <CustomCursor/>
      <NavBar/>
      <Hero/>
    </section>
    <section className='h-screen snap-center overflow-y-hidden'><Parallax Type="Services"/></section>
    <section id='Services' className='h-screen snap-center'>
      <Services/>
      </section>
    <section className='h-screen snap-center overflow-y-hidden'><Parallax Type="PortFolio"/></section>
    <Portfolio/>
    <section id='Contact' className='h-screen snap-center flex justify-center items-center'>
      <Contact/>
    </section>
  </div>
</>

  )
}

export default App
