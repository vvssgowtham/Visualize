import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AreaChart from './pages/AreaChart'
import LineChart from './pages/LineChart'
import BarChart from './pages/BarChart'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/area-chart" element={<AreaChart />} />
        <Route path="/line-chart" element={<LineChart />} />
        <Route path="/bar-chart" element={<BarChart />} />
      </Routes>
    </Router>
  )
}

export default App