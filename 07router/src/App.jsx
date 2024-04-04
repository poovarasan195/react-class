// import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    
    <>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
    < Footer />
    </>
  );
}

export default App;
