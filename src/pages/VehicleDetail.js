import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button2 from '../components/Button2'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getData } from '../helpers/http'
import { FaHeart } from 'react-icons/fa'
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/actions/counter'
const { REACT_APP_URL } = process.env

export const VehicleDetail = (props) => {
    const auth = useSelector(state => state.auth)
    const counter = useSelector(state => state.counter)
    const [vehicle, setVehicle] = useState({})
    const { vehicleId } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        window.scrollTo(0, 0)
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
    const goToDetail = (vehicleId) => {
        navigate(`/vehicles/reservation/${vehicleId}`)
    }

    return (
        <>
            <Navbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Vehicle Detail | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
            <div className='container'>
                <div className='row my-5'>
                    <div className="col-12 col-xl-6">
                        <div className='rounded'>
                            <img id="img-object" src={vehicle?.image} alt={vehicle?.name} className=" img-detail-vehicle pe-4" />
                        </div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <h2><b>{vehicle?.name} - </b> {vehicle?.location}</h2>
                        <div className="d-flex row align-items-center my-5">
                            <div className="col-12 col-xl-6 ">
                                <div className='d-flex flex-column align-items-center mb-5'>
                                    <h5 className="text-success"><b>Available</b></h5>
                                    <h5 className="text-danger"><b>No Prepayment</b></h5>
                                    <p>Capacity : 1 Person</p>
                                    <p>Type : Bike </p>
                                    <p>Reservation Before 2 PM</p>
                                </div>
                                <Button2 />
                            </div>
                            <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center">
                                <h4 ><b> Rp. {vehicle?.price}/day</b></h4>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto d-flex justify-content-between row my-5'>
                        <div className='col-xl-6 col-12 d-grid my-1'>
                            <button type="button" className="btn-detail-vehicle btn btn-info">Chat
                                Admin</button>
                        </div>
                        <div className="col-xl-5 col-12 d-grid my-1">
                            <button onClick={() => goToDetail(vehicleId)} type="button"
                                className="btn-detail-reserv  btn btn-info">Reservation</button>
                        </div>
                        <div className="col-xl-1 col-12  d-grid my-1">
                            <Link to="/"><button type="button" className="btn-detail-fav btn btn-info">
                                <FaHeart /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default VehicleDetail