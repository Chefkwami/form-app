import React from 'react'
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import MainContent from '../components/MainContent';
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className='px-4 md:px-8 lg:px-16'>
      <Header/>
      <Buttons/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default HomePage;
