import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'
import {GiTalk} from 'react-icons/gi'
import {FaBookOpen} from 'react-icons/fa'
import {RiSuitcaseFill} from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')}className={activeNav==='#' ? 'active' : ''}><HiHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')}className={activeNav==='#about' ? 'active' : ''}><FaUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')}className={activeNav==='#experience' ? 'active' : ''}><FaBookOpen /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')}className={activeNav==='#portfolio' ? 'active' : ''}><RiSuitcaseFill /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')}className={activeNav==='#contact' ? 'active' : ''}><GiTalk /></a>
    </nav>
  )
}

export default Nav