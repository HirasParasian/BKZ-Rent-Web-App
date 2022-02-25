import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/http'
import defaultvehicle from '../assets/images/default.jpeg'

export const VehicleDetail = (props) => {
    const [vehicle, setVehicle] = useState({})

    const { vehicleId } = useParams()
    console.log(vehicleId)

    useEffect(() => {
        getDataComponent(vehicleId)
    }, [])

    const getDataComponent = async (vehicleId) => {
        try {
            const { data } = await getData(`http://localhost:5000/vehicles?search=${vehicleId}`, props.history)

            setVehicle(data.results[0])
            console.log(data.results[0])
        } catch (e) {

        }
    }
    return (
        <Layout>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={defaultvehicle} alt="charImg" />
                    </div>
                    <div className='col-md-8'>
                        <h1>{vehicle?.name}</h1>
                        <div>
                            <div>Type: {vehicle?.type}</div>
                            <div>Price: {vehicle?.price}</div>
                            <div>Location: {vehicle?.location}</div>
                            <div>Is Stock: {vehicle?.stock}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default VehicleDetail