import React from 'react'
import{ImMenu} from 'react-icons/im'
import { useState } from 'react'
import './header.css'
import {MdLightMode,MdDarkMode}from 'react-icons/md'

function Header({switchTheme}) {
  

  
  return (
    <div className='header-container'>
      <div className='ligth-mode'><MdLightMode onClick={switchTheme}/><MdDarkMode onClick={switchTheme}/></div>
      <div className='duo'>
        <span className='noti-dot'/>
        <h4>CHORES</h4>
      </div>
      
    </div>
  )
}

export default Header