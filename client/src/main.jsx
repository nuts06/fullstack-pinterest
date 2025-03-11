import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Homepage from './routes/Homepage/Homepage.jsx';
import Createpage from './routes/Createpage/Createpage.jsx';
import Postpage from './routes/Postpage/Postpage.jsx';
import Authpage from './routes/Authpage/Authpage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/create" element={<Createpage />}></Route>
        <Route path="/post" element={<Postpage />}></Route>
        <Route path="/auth" element={<Authpage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
