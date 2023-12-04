import { useState } from 'react'
import Header from './components/Header/Header'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Runes from './components/Runes/Runes';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import RuneCalculator from './components/RuneCalculator/RuneCalculator'
import HighRunes from './components/HighRunes/HighRunes'
import RuneProject from './components/RuneProject/RuneProject'
import Logout from './components/Logout/Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/runes' element={<Runes />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/runes-calculator' element={<RuneCalculator />}/>
        <Route path='/hrs' element={<HighRunes />}/>
        <Route path='/runes-project' element={<RuneProject />}/>
        <Route path='/logout' element={<Logout />}/>
        <Route path='/*' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
