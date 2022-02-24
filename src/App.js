import React, { Component } from 'react'
import Homepage from './pages/Homepage'
import History from './pages/History'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profil from './pages/Profil'
import Reservation from './pages/Profil'
import ListVehicle from './pages/ListVehicle'
import DetailVehicle from './pages/DetailVehicle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='history' element={<History />} />
          <Route path='profil' element={<Profil />} />
          <Route path='vehicles' element={<ListVehicle />} />
          <Route path='vehicles/:vehicleId' element={<DetailVehicle />} />
          <Route path='reservation' element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
