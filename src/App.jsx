import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div className='container hero is-fullheight'>
      <GlobalStyles />

      <Header/>

      <main>
        <Outlet />
      </main>

      <Footer/>

    </div>
  )
}

export default App
