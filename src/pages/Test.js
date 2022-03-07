import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { default as axios } from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { Helmet } from "react-helmet";
const { REACT_APP_URL } = process.env


export const Search = () => {
    const [popularInTown, setPopularInTown] = useState([])
    const [page, setPage] = useState({})

    // eslint-disable-next-line no-unused-vars
    const [errorMsg, setErrorMsg] = useState(null)
    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        getPopularInTown()
    }, [])

    const getPopularInTown = async () => {
        const { data } = await axios.get(`${REACT_APP_URL}/vehicles?limit=8`)
        setPopularInTown(data.results)
        setPage(data.pageInfo)
    }


    const getNextData = async (url, replace = false) => {
        try {
            setErrorMsg(null)
            const { data } = await axios.get(url)
            if (replace) {
                setPopularInTown(data.results)
            } else {
                setPopularInTown([
                    ...data.results
                ])
            }
            setPage(data.pageInfo)
        } catch (e) {
            if (e.message.includes('404')) {
                setErrorMsg('Data not found!')
                setPopularInTown([])
                setPage({
                    next: null
                })
            }
        }
    }
    const onSearch = async (event) => {
        event.preventDefault();
        const url = (name, type) => `http://localhost:5000/vehicles?search=${name}&category=${type}&sort=${sort}&order=${order}&limit=8`
        const name = event.target.elements["search"].value
        const type = event.target.elements["type"].value
        const sort = event.target.elements["sort"].value
        const order = event.target.elements["order"].value
        setSearchParams({ name, type, sort })
        await getNextData(url(name, type, sort, order), true)
        // navigate(`/vehicles?search=${name}&category=${type}`, { replace: true })
    }


    const goToDetail = (vehicleId) => {
        navigate(`/vehicles/${vehicleId}`)
    }
    return (

        <><Navbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Search | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
            <header>
                <div className="row">
                    <div className="col-xl-12 d-flex for-margin-search ">
                        <form id='search' onSubmit={onSearch} className="border-brown input-group mb-3 rounded mx-auto button-type-name ">
                            <input name="search" type="text" className="btn-search-type form-control bg-transparent col-12 col-lg-3"
                                placeholder="Search vehicle (ex. cars, cars name)" />
                            <select name='type' className='col-12 col-lg-3 form-select bg-transparent  form-control border-end-0 border-top-0 border-bottom-0 text-secondary'>
                                <option value='' style={{ display: 'none' }}>Select Category</option>
                                <option value="1">Bike</option>
                                <option value="2">Motorbike</option>
                                <option value="3">Car</option>
                            </select>
                            <select name='sort' className='col-12 col-lg-3 form-select bg-transparent  form-control border-end-0 border-top-0 border-bottom-0 text-secondary'>
                                <option value='' style={{ display: 'none' }}>Sort By</option>
                                <option value="createdAt">Date Created</option>
                                <option value="name">Name</option>
                                <option value="3">Price</option>
                            </select>
                            <select name='order' className='col-12 col-lg-3 form-select bg-transparent  form-control border-end-0 border-top-0 border-bottom-0 text-secondary'>
                                <option value='' style={{ display: 'none' }}>Order By</option>
                                <option value="ASC">ASCENDING</option>
                                <option value="DESC">DESCENDING</option>
                            </select>
                            <button className="btn " type="submit" id="button-addon2"><FaSearch /></button>
                        </form>
                    </div>
                </div>
            </header>

            <div className="main">
                <div className="container mt-5">
                    <div className='mt-5'>
                        <div className="row">
                            <div className="col-md-12 d-flex ">
                                <div className='col-md-6'>
                                    <h2><b> Search</b></h2>
                                </div>
                                <div className='col-md-6 d-flex justify-content-end'>
                                    {page.prev !== null && <button onClick={() => getNextData(page.prev)} className='btn '><p><FaChevronLeft />View Prev </p></button>}
                                    {page.next !== null && <button onClick={() => getNextData(page.next)} className='btn '><p>View More <FaChevronRight /></p></button>}
                                </div>
                            </div>
                            {popularInTown.map((data, idx) => {
                                return (
                                    <div onClick={() => goToDetail(data.vehicleId)} style={{ cursor: 'pointer' }} key={String(data.vehicleId)} className='d-flex flex-column flex-md-row flex-md-wrap col-md-3 my-5'>
                                        <div className='position-relative mb-2 '>
                                            <img id="img-object-home" className='img-thumbnail img-search img-fluid' src={data.image} alt={data.name} />
                                            <div className='position-absolute bottom-0 start-0 px-3 py-2 text-img1'>
                                                <div>{data.name}</div>
                                                <div>{data.location}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Search