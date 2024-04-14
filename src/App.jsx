import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='container hero is-fullheight'>
      <Header/>

      <main>
        <Outlet />
      </main>

      <Footer/>

    </div>
  )
}

export default App
