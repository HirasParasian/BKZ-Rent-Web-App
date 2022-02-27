import React, { Component } from 'react'
import Homepage from './pages/Homepage'
import History from './pages/History'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profil from './pages/Profil'
import Payment from './pages/Payment'
import VehicleType from './pages/VehicleType'
import Reservation from './pages/Reservation'
import VehicleDetail from './pages/VehicleDetail'
import CharacterList from './pages/CharacterList'
import CharacterDetail from './pages/CharacterDetail'
import { createBrowserHistory } from 'history'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='history' element={<History />} />
          <Route path='profil' element={<Profil />} />
          <Route path='vehicletype' element={<VehicleType />} />
          <Route path='vehicles/:vehicleId' element={<VehicleDetail history={this.history} />} />
          {/* <Route path='vehicles' element={<ListVehicle />} />
          <Route path='vehicles/:vehicleId' element={<DetailVehicle />} /> */}
          <Route path='characters' element={<CharacterList />} />
          <Route path='characters/:id' element={<CharacterDetail history={this.history} />} />
          <Route path='payment' element={<Payment />} />
          <Route path='vehicles/reservation/:vehicleId' element={<Reservation history={this.history} />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
