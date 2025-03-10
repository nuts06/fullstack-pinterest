import { useState } from 'react'
import './App.css'
import Leftbar from './components/Leftbar/Leftbar'
import Topbar from './components/Topbar/Topbar'
import Gallery from './components/Gallery/Gallery'

function App() {

  return (
    <div className='app'>
      <Leftbar />
      <div className="content">
        <Topbar />
        <Gallery />
      </div>
    </div>
  )
}

export default App
