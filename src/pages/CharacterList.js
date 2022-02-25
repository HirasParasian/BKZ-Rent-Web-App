import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { default as axios } from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import qs from 'qs'

export const CharacterList = () => {
    const [character, setCharacter] = useState([])
    const [page, setPage] = useState({})
    const [errorMsg, setErrorMsg] = useState(null)

    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const name = searchParams.get('name')
        const gender = searchParams.get('gender')

        if (name || gender) {
            const url = (name, gender) => `https://rickandmortyapi.com/api/character?name=${name}&gender=${gender}`
            document.getElementById('search').elements['search'].value = name
            document.getElementById('search').elements['gender'].value = gender
            getNextData(url(name, gender), true)
        } else {
            getCharacter()
        }
    }, [])

    const getCharacter = async () => {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character')
        setCharacter(data.results)
        setPage(data.info)
    }

    const getNextData = async (url, replace = false) => {
        try {
            setErrorMsg(null)
            const { data } = await axios.get(url)
            if (replace) {
                setCharacter(data.results)
            } else {
                setCharacter([
                    ...data.results
                ])
            }
            setPage(data.info)
        } catch (e) {
            if (e.message.includes('404')) {
                setErrorMsg('Data not found!')
                setCharacter([])
                setPage({
                    next: null
                })
            }
        }
    }
    const onSearch = async (event) => {
        event.preventDefault();
        const url = (name, gender) => `https://rickandmortyapi.com/api/character?name=${name}&gender=${gender}`
        const name = event.target.elements["search"].value
        const gender = event.target.elements["gender"].value
        setSearchParams({ name, gender })
        await getNextData(url(name, gender), true)
    }

    const goToDetail = (id) => {
        navigate(`/characters/${id}`)
    }
    return (
        <Layout>
            <main className='container'>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <form id='search' onSubmit={onSearch} className='input-group'>
                            <input name="search" type="text" placeholder='Search character' className='form-control' />
                            <select name='gender' className='form-control'>
                                <option value='' style={{ display: 'none' }}>Select a Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="genderless">Gender-less</option>
                                <option value="unknown">Unknown</option>
                            </select>
                            <button type='submit' className='btn btn-primary'>Search</button>
                        </form>
                    </div>
                </div>
                {errorMsg !== null &&
                    <div className='row my-5'>
                        <div className='col'>
                            <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                                <span>{errorMsg}</span>
                                <button onClick={() => setErrorMsg(null)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                }
                <div className='row my-5'>
                    {character.map((data, idx) => {
                        return (
                            <div onClick={() => goToDetail(data.id)} style={{ cursor: 'pointer' }} key={String(data.id)} className='col-md-3'>
                                <div className='position-relative mb-2'>
                                    <img className='img-fluid' src={data.image} alt={data.name} />
                                    <div className='position-absolute bottom-0 start-0 bg-white px-3 py-2'>{data.name}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {page.next !== null &&
                    <div className='row my-5'>
                        <div className='col-md-12 text-center'>
                            <button onClick={() => getNextData(page.next)} className='btn btn-primary'>Load More</button>
                        </div>
                    </div>
                }
            </main>
        </Layout>
    )
}

export default CharacterList