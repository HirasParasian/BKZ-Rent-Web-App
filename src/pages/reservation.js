import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { getData } from '../helpers/http'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button2 from '../components/Button2'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const { REACT_APP_URL } = process.env

export const Reservation = (props) => {
    const auth = useSelector(state => state.auth)
    const [vehicle, setVehicle] = useState({})
    const { vehicleId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getDataComponent(vehicleId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDataComponent = async (vehicleId) => {
        try {
            const { data } = await getData(`${REACT_APP_URL}/vehicles/id?vehicleId=${vehicleId}`, props.history)

            setVehicle(data.results[0])
        } catch (e) {

        }
    }
    const goToDetail = (dataID) => {
        navigate(`/payment/${dataID}`)
    }

    return (
        <>{auth.token == null && <Navigate to='/login' />}
            <Navbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Reservation | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="my-5">
                        <Link to="/" className="href text-decoration-none">
                            <i className="reserv-back fa-solid fa-chevron-left"></i>
                            <span className="span-reserv">Reservation</span>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className='d-block d-sm-none col-xl-12 px-5 py-5'>
                        <img src={vehicle?.image} alt={vehicle?.name} className="img-fluid img-thumbnail inline-block" />
                    </div>
                    <div className='d-flex'>
                        <div className="col d-none d-sm-block ">
                            <img src={vehicle?.image} alt={vehicle?.name} className="img-fluid img-thumbnail inline-block" />
                        </div>
                        <div className="col  px-5 ">
                            <h2><b>{vehicle?.name} </b> </h2>
                            <h5 className="text-secondary"><b>{vehicle?.location}</b></h5><br />
                            <h5 className="text-danger"><b>No Prepayment</b></h5>
                            <br />
                            <Button2 />
                            <div className="d-grid gap-2 px-1">
                                <label htmlFor="Reservation"> Reservation Date : </label>
                                <div className="mb-3 ">
                                    <input type="date" placeholder="Date" className="form-control form-select" />
                                </div>
                                <div className="mb-3">
                                    <select className="form-select">
                                        <option className="d-none">Location</option>
                                        <option value="Bekasi">Bekasi</option>
                                        <option value="Bandung">Bandung</option>
                                        <option value="Bogor">Bogor</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 mt-5">
                        <div className='d-grid gap-2'>
                            <button onClick={() => goToDetail(vehicleId)} type="button" className="btn-pay-now btn btn-info">Pay now : Rp. 178.000 </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Reservation