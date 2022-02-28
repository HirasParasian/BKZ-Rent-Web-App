import React, { Component } from 'react'
import Homepage from './pages/Homepage'
import History from './pages/History'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Test from './pages/Test'
import Profil from './pages/Profil'
import Payment from './pages/Payment'
import VehicleType from './pages/VehicleType'
import Reservation from './pages/Reservation'
import VehicleDetail from './pages/VehicleDetail'
import CharacterList from './pages/CharacterList'
import CharacterDetail from './pages/CharacterDetail'
// eslint-disable-next-line no-unused-vars
import { createBrowserHistory } from 'history'
import { unstable_HistoryRouter as HistoryRouter, BrowserRouter, Route, Routes } from 'react-router-dom'


export default class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  history = createBrowserHistory()
  render() {
    return (
      <HistoryRouter history={this.history}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='history' element={<History />} />
          <Route path='search' element={<Test />} />
          <Route path='profil' element={<Profil />} />
          <Route path='vehicletype' element={<VehicleType />} />
          <Route path='vehicles/:vehicleId' element={<VehicleDetail history={this.history} />} />
          <Route path='characters' element={<CharacterList />} />
          <Route path='characters/:id' element={<CharacterDetail history={this.history} />} />
          <Route path='payment/:vehicleId' element={<Payment history={this.history} />} />
          <Route path='vehicles/reservation/:vehicleId' element={<Reservation history={this.history} />} />
        </Routes>
      </HistoryRouter>
    )
  }
}
