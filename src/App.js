import React from 'react'
import './App.css'
import Yesterday from './pages/Yesterday'
import { Routes, Route } from 'react-router-dom'
import LastHours from './pages/LastHours'
import LastThreeDay from './pages/LastThreeDay'

const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/yesterday" element={<Yesterday/>} />
      <Route path="/" element={<LastHours/>} />
      <Route path="/last-three-days" element={<LastThreeDay/>} />
      </Routes>
     
    </div>
  )
}

export default App