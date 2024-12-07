import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to = '/' className='w-40 h-45 rounded-lg bg-white items-center justify-center flex font-extrabold shadow-indigo-950 shadow-md'>
            <p className='blue-gradient_text'>EmpowerEd</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about_us' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-blue-950'}>
                About Us
            </NavLink>
            <NavLink to='/features' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-blue-950'}>
                Features
            </NavLink>
            <NavLink to='/join_us' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-blue-950'}>
                Join Us
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-400' : 'text-blue-950'}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar