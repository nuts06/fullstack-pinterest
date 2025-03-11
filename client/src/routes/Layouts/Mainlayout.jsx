import React from 'react'
import Leftbar from '../../components/Leftbar/Leftbar'
import {Outlet} from 'react-router'
import Topbar from '../../components/Topbar/Topbar'

const Mainlayout = () => {
  return (
     <div className='app'>
          <Leftbar />
          <div className="content">
            <Topbar />
            <Outlet />
          </div>
        </div>
  )
}

export default Mainlayout