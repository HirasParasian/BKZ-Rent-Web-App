import Test                     from './pages/Test'
import Login                    from './pages/Login'
import Signup                   from './pages/Signup'
import Profil                   from './pages/Profil'
import History                  from './pages/History'
import Payment                  from './pages/Payment'
import Homepage                 from './pages/Homepage'
import React, { Component }     from 'react'
import VehicleType              from './pages/VehicleType'
import Reservation              from './pages/Reservation'
import { createBrowserHistory } from 'history'
import VehicleDetail            from './pages/VehicleDetail'
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
export default class App extends Component {

  history = createBrowserHistory()
  render() {
    return (
      <HistoryRouter history={this.history}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='search' element={<Test />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='profil' element={<Profil />} />
          <Route path='history' element={<History />} />
          <Route path='vehicletype' element={<VehicleType />} />
          <Route path='payment/:vehicleId' element={<Payment history={this.history} />} />
          <Route path='vehicles/:vehicleId' element={<VehicleDetail history={this.history} />} />
          <Route path='vehicles/reservation/:vehicleId' element={<Reservation history={this.history} />} />
        </Routes>
      </HistoryRouter>
    )
  }
}
