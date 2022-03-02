import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button2 from '../components/Button2'
import { useParams, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/http'
import { FaHeart } from 'react-icons/fa'
import { Helmet } from "react-helmet";
const { APP_URL } = process.env

export const VehicleDetail = (props) => {
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
            const { data } = await getData(`http://localhost:5000/vehicles/id?vehicleId=${vehicleId}`, props.history)

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
                <link rel="canonical" href="/" />
            </Helmet>
            <div className='container'>
                <div className='row my-5'>
                    <div className="col-6">
                        <div className='rounded'>
                            <img id="img-object" src={vehicle?.image} alt={vehicle?.name} className=" img-detail-vehicle pe-4" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <h2><b>{vehicle?.name} - </b> {vehicle?.location}</h2>
                            <h5 className="text-success"><b>Available</b></h5>
                            <h5 className="text-danger"><b>No Prepayment</b></h5>
                            <br />
                            <div>
                                <p>Capacity : 1 Person</p>
                                <p>Type : Bike </p>
                                <p>Reservation Before 2 PM</p>

                            </div>
                            <div className="d-flex">
                                <Button2 />
                                <h4 className="d-flex align-items-center justify-content-center"><b> Rp. {vehicle?.price}/day</b></h4>
                            </div>

                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='my-5 col-xl-6 col-md-12 pe-5  d-grid'>
                            <button type="button" className="btn-detail-vehicle btn btn-info">Chat
                                Admin</button>
                        </div>
                        <div className="col-4 d-grid">
                            <button onClick={() => goToDetail(vehicleId)} type="button"
                                className="btn-detail-reserv  btn btn-info">Reservation</button>
                        </div>
                        <div className="col-2  d-grid">
                            <a href="/"><button type="button" className="btn-detail-fav btn btn-info">
                                <FaHeart /></button></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default VehicleDetail