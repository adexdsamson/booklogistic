import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-[35%] flex justify-between items-center font-bold text-white'>
      <NavLink to='/' > Contact Us </NavLink>
      <NavLink to='/' > Track Item </NavLink>
      <NavLink to='/' > Login </NavLink>
      <NavLink to='/' > Register </NavLink>
    </div>
  )
}

export default Nav