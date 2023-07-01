import React, { useState } from 'react';
import {BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Info from './pages/Info';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NoticeLayout from './pages/NoticeLayout';
import NoticeDetail from './pages/NoticeDetail';
import './assets/css/reset.css'
import GlobalStyle from './styled/Global';
import Noticelist from './pages/NoticeList';
import ElectronicList from './pages/ElectronicList';


const App = () => {
  return (
    <>
      <div id='wrap'>
        <BrowserRouter >
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/info' element={<Info />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/electronicList' element={<ElectronicList />} />

            <Route path='/noticeList' element={<NoticeLayout />}>
              <Route index element={<Noticelist/>}/>
              <Route path=':id' element={<NoticeDetail />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      <GlobalStyle />
    </>
  );
};

export default App;