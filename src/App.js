import React, { Component } from 'react'
import Hompage from './pages/Homepage'
import History from './pages/History'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hompage />} />
          <Route path='/history' element={<History />} />
          <Route path='/' element={<History />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
