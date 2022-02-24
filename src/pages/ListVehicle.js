import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { default as axios } from 'axios'
// import { useParams } from 'react-router-dom'
import defaultvehicle from '../assets/images/default.jpeg'

export const ListVehicle = () => {
    const [vehicles, setVehicles] = useState([])
    const [page, setPage] = useState({})

    useEffect(() => {
        getVehciles()
    }, [])

    const getVehciles = async () => {
        const { data } = await axios.get('http://localhost:5000/vehicles')
        setVehicles(data.results)
        setPage(data.pageInfo)
    }

    const getNextData = async (url) => {
        const { data } = await axios.get(url)
        setVehicles([
            ...data.results
        ])
        setPage(data.pageInfo)
    }
    return (
        <Layout>
            <main className='container'>
                <div className='row my-5'>
                    {vehicles.map((data, idx) => {
                        return (
                            <div className='col-md-3'>
                                <div className='position-relative mb-2'>
                                    <img className='img-fluid' src={defaultvehicle} alt={data.name} />
                                    <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2'>{data.name}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='row my-5'>
                    <div className='col-md-12 text-center'>
                        <button onClick={() => getNextData(page.next)} className='btn btn-primary'>Load More</button>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default ListVehicle