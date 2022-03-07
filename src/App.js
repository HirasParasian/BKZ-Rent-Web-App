import Test from './pages/Test'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profil from './pages/Profil'
import History from './pages/History'
import Payment from './pages/Payment'
import Homepage from './pages/Homepage'
import AllBikes from './pages/AllBikes'
import AllCars from './pages/AllCars'
import AllMotors from './pages/AllMotors'
import React, { useEffect } from 'react'
import VehicleType from './pages/VehicleType'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Reservation from './pages/Reservation'
import { createBrowserHistory } from 'history'
import VehicleDetail from './pages/VehicleDetail'
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDataUser } from './redux/actions/auth'

export const App = () => {
  const history = createBrowserHistory({ window })
  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      dispatch({
        type: 'AUTH_LOGIN_FULFILLED',
        payload: {
          data: {
            results: { token }
          }
        }
      })
      dispatch(getDataUser(token))
    }
  }, [])
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='search' element={<Test />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='profil' element={<Profil />} />
        <Route path='history' element={<History />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
        <Route path='resetpassword' element={<ResetPassword />} />
        <Route path='AllBikes' element={<AllBikes />} />
        <Route path='AllCars' element={<AllCars />} />
        <Route path='AllMotors' element={<AllMotors />} />
        <Route path='vehicletype' element={<VehicleType />} />
        <Route path='payment/:vehicleId' element={<Payment history={history} />} />
        <Route path='vehicles/:vehicleId' element={<VehicleDetail history={history} />} />
        <Route path='vehicles/reservation/:vehicleId' element={<Reservation history={history} />} />
      </Routes>
    </HistoryRouter>
  )
}
export default App