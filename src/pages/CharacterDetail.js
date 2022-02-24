import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams, useNavigate } from 'react-router-dom'
import { getData } from '../helpers/http'

export const CharacterDetail = (props) => {
    const [character, setCharacter] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getDataComponent(id)
    }, [])

    const getDataComponent = async (id) => {
        try {
            const { data } = await getData(`https://rickandmortyapi.com/api/character/${id}`, props.history)
            setCharacter(data)
        } catch (e) {

        }
    }
    return (
        <Layout>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-md-4'>
                        <img className='img-fluid' src={character?.image} alt="charImg" />
                    </div>
                    <div className='col-md-8'>
                        <h1>{character?.name}</h1>
                        <div>
                            <div>Gender: {character?.gender}</div>
                            <div>Status: {character?.status}</div>
                            <div>Species: {character?.species}</div>
                            <div>Type: {character?.type}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CharacterDetail