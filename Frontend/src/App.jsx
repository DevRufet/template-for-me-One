import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './pages/Main/MainLayout/MainLayout';
import Home from './pages/Main/Home/Home';
import Aboutus from './pages/Main/About us/Aboutus';
import Restaurant from './pages/Main/Restaurant/Restaurant';
import News from './pages/Main/News/News';
import Contact from './pages/Main/Contact/Contact';
import Detail from './pages/Main/Detail/Detail';
import AdminLayou from './pages/Admin/AdminLayout/AdminLayou';
import Admin from './pages/Admin/Admin/Admin';
import AdminAdd from './pages/Admin/AdminAdd/AdminAdd';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminLayou />}>
          <Route index element={<Admin />} />
          <Route path="/admin/add" element={<AdminAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
