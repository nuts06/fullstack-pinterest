import React from 'react'
import Userbutton from '../Userbutton/Userbutton'
import './topbar.css'
const Topbar = () => {
  return (
    <div className='topBar'>
      {/* Search */}
      <div className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder='Search'/>
      </div>
      {/* User */}
      <Userbutton />
    </div>
  )
}

export default Topbar