import { useState } from 'react'
import Header from './components/Header/Header'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
