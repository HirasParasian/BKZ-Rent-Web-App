import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import React, { useState, useEffect } from 'react'
import { default as axios } from 'axios'

export const DetailItem = () => {
    const { vechicleId } = useParams()
    const [character, setCharacter] = useState([])
    const [page, setPage] = useState({})

    useEffect(() => {
        getCharacter()
    }, [])

    const getCharacter = async () => {
        const { data } = await axios.get('http://localhost:5000/vehicles?search=sepeda')
        setCharacter(data.results)
        setPage(data.pageInfo)
    }

    const getNextData = async (url) => {
        const { data } = await axios.get(url)
        setCharacter([
            ...data.results
        ])
        setPage(data.info)
    }
    return (
        <Layout>
            <main className='container'>
                <div className='row my-5'>
                    {character.map((data, idx) => {
                        return (
                            <div className='col-md-3'>
                                <div className='position-relative mb-2'>
                                    <img className='img-fluid' src={data.image} alt={data.name} />
                                    <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2'>{data.name}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {vechicleId}
                </div>
            </main>
        </Layout>
    )
}

export default DetailItem