import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Homepage from './routes/Homepage/Homepage.jsx';
import Createpage from './routes/Createpage/Createpage.jsx';
import Postpage from './routes/Postpage/Postpage.jsx';
import Authpage from './routes/Authpage/Authpage.jsx';
import Searchpage from './routes/Searchpage/Searchpage.jsx';
import Profilepage from './routes/Profilepage/Profilepage.jsx';
import Mainlayout from './routes/Layouts/Mainlayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/create" element={<Createpage />}></Route>
          <Route path="/post" element={<Postpage />}></Route>
          <Route path="/search" element={<Searchpage />}></Route>
          <Route path="/:username" element={<Profilepage />}></Route>
        </Route>
        <Route path="/auth" element={<Authpage />}></Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
