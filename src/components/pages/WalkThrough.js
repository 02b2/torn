import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './WalkThrough.css'

function WalkThrough() {
  return (
    <div className='j'>
        <Navbar />
        <div>
        <div className='max-w-[800px] pt-10 w-full h-screen mx-auto text-center flex flex-col justify-centre' >
        <p className='neon-text md:text-7xl sm:text-6xl text-center text-4xl font-bold p-2 '>
          The Garden Of Heathens
        </p>
        <div className='heading'>
                <h1 className='py-12 neon-text neon-text md:text-7m sm:text-6m text-center text-4m font-bold ' >WalkThrough</h1>
              </div>
        <div className='block glow'></div>
        
        </div>
        </div>
        <Footer />
        </div>
  )
}

export default WalkThrough