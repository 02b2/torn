
import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='position-absolute flex-start max-w-[1840px] px-2 mx-auto items-center h-24 text-white' >
        <ul className='hidden'>
            <li className='p-4'><Link to="/" >Home</Link></li>
            <li className='p-4'><Link to="/About" >About</Link></li>
            <li className='p-4'><Link to="/Walkthrough" >WalkThrough</Link></li>

        </ul>
        <div onClick={handleNav}>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div >
        <div className={!nav ? ' left-0 ease-in-out duration-500 top-0 w-[60%] bg-[000300] border-r h-full border-r-gray-900' : 'fixed left-[-100%]' } >
            
            <ul className='pt-24 uppercase ' > 
            <li className='p-4 border-b border-gray-600'><Link to="/" >Home</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to="/About" >About</Link></li>
            <li className='p-4'><Link to="/WalkThrough" >WalkThrough</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar