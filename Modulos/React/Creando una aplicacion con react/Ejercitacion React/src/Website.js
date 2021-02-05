import React from 'react';
import Content from './components/Content';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function Website() {
  return (
    <div className="container-fluid">
      <NavBar />
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default Website;
