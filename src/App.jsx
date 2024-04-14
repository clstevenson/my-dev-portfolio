import { useState } from 'react'
import './App.css'
import NavBar from './components/Navigation'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

    </>
  )
}

export default App
