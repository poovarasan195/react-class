// Header.js
import React from 'react';
import { Routes, Route , Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Context from '../context';

function Header() {

  return (


    <div>
       <div className='text-yellow-500 flex gap-x-10 float-right font-bold mr-2'>
       <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/context'>context</Link>
       </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </div>
  );
}

export default Header;
