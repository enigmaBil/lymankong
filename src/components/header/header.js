import React from 'react'
import NavBar from './navBar'
import TopBar from './topBar'
import './header.css'

function header() {
  return (
    <div className="header" >
      <div className="header_content">
        <TopBar />
        <NavBar/>
      </div>
    </div>
  )
}

export default header
