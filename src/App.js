import React, { Component } from 'react'
import Hompage from './pages/Homepage'
import History from './pages/History'
import Profil from './pages/Profil'
import ListVehicle from './pages/ListVehicle'
import DetailVehicle from './pages/DetailVehicle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hompage />} />
          <Route path='history' element={<History />} />
          <Route path='profil' element={<Profil />} />
          <Route path='vehicles' element={<ListVehicle />} />
          <Route path='vehicles/:vehicleId' element={<DetailVehicle />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
