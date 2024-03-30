import React,{useState} from 'react'
import {Link , NavLink} from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
  const[menuOPen , setMenuOPen] = useState(false)
  return (
   <nav>
    <Link to = '/' className='title'>JobEntry</Link>
    <div className='menu' onClick = {()=>{
setMenuOPen(!menuOPen);
    }}> 
    <span> </span>
    <span> </span>
    <span> </span>
    </div>
    <ul className={menuOPen ? "open": " " }>
        <li>
          <NavLink to = '/Home'>Home</NavLink>
        </li>
        <li>
          <NavLink to = '/jobs'>jobs</NavLink>
        </li>
        <li>
          <NavLink to = '/About'>About</NavLink>
        </li>
        <li>
          <NavLink to = '/Contact'>Contact</NavLink>
        </li>
    </ul>
   </nav>
  )
}

