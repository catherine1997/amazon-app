import React, { useState } from 'react';
import {BiMenuAltRight } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
  return (
    <nav className='_nav bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-b dark:bg-gray-800'>

<span onClick={() => setToggle(!toggle)}>
    
    <BiMenuAltRight size={30}/>
</span>
    <ul className={`${toggle ? 'active' : 'nav-bar'}`}>
        <li>
            <a href='#'>Home</a>
        </li>

        <li>
            <a href='#'>Services</a>
        </li>

        <li>
            <a href='#'>Contact</a>
        </li>

        <li>
            <a href='#'>Blog</a>
        </li>
        <li>
            <a href='#'>About</a>
        </li>
        <li>
            <a href='#'>home</a>
        </li>
    </ul>
  </nav>
  )
}

export default Navbar