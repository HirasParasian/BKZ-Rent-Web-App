import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/http'
import { Helmet } from "react-helmet";
import { BsPencil } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import placeholders from '../assets/images/placeholder.png'
import { createVehicle } from '../redux/actions/vehicle'
import Alert from '../components/Alert'
const { REACT_APP_URL } = process.env


export const CreateVehicle = (props) => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const userData = auth?.userData || {}
    const birthDateDay = userData?.birthDate
    const newdate = new Date(birthDateDay).toLocaleDateString("id")
    

      const editProfile = (event) => { 
        event.preventDefault()
        const token = auth?.token
        const image = document.getElementById('image').files[0];
        const name = event.target.elements['name'].value
        const price = event.target.elements['price'].value
        const location = event.target.elements['location'].value
        const category = event.target.elements['category'].value
        const stock = event.target.elements['stock'].value
        const description = event.target.elements['description'].value
        
        const data = { name, price, location, image,category,stock,description }
        dispatch(createVehicle(data, token))
    }



    return (
        <>
            <Navbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Create Vehicle | Planet BKZ Rent</title>
                <link rel="canonical" to="/" />
            </Helmet>
            <div className="container">
                <form onSubmit={editProfile}>
                    <div className='row'>
                        {!auth.isError &&
                            <Alert>{auth.errorMsg}</Alert>

                        }
                        {auth.isError &&
                            <Alert>{auth.successMsg}</Alert>

                        }
                        <div className="col-12">
                            <h4 className="profile-text">Create New Vehicle</h4>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                            <div className="position-relative">
                                <img className=" rounded-circle img-thumbnail img-fluid img-profile-thumbnail" src={placeholders} alt="" />
                                <button className="rounded-circle bg-warning border-0 button-edit-profile">
                                    <BsPencil />
                                    <input
                                    id="image"
                                    style={{
                                        zIndex: 134, right: '-80px', opacity: '0', cursor: 'pointer',
                                    }}
                                    className="position-absolute"
                                    type="file"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="col-12">
                            <label className="profile-contacts" htmlFor="Contacts">Details Vehicle</label>
                            <div className="form-group">
                                <label className="text-contact">Name :</label>
                                <input type="text" name="name" id="name"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                    aria-describedby="emailHelp" placeholder='vehicle name' />
                            </div>
                            <div className="form-group">
                                <label className="text-contact">Price :</label>
                                <input type="number" name="address" id="price"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                    placeholder='vehicle Price'/>
                            </div>
                            <div className="form-group">
                                <label className="text-contact">Stock :</label>
                                <input type="number" name="stock" id="stock"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                    placeholder='vehicle Stock'/>
                            </div>
                            <div className="form-group">
                                <label className="text-contact">Description :</label>
                                <input type="text" name="description" id="description"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                    placeholder='vehicle Description'/>
                            </div>
                            <div className="form-group">
                                <label className="text-contact">Location :</label>
                                <input type="text" id="location" name="location"
                                    className="form-contact form-control border-dark bg-transparent border-top-0 border-start-0 border-end-0"
                                    placeholder="vehicle location" />
                            </div>
                            <div className="mb-3  bg-transparent">
                                <select id="category" className="form-select  bg-transparent">
                                    <option className="d-none">Category</option>
                                    <option value="1">Bike</option>
                                    <option value="2">Motorbike</option>
                                    <option value="3">Car</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 row">
                        <div className="col-12 col-lg-4 col-xl-4 d-grid my-1 mx-auto">
                            <button type="submit" className=" btn btn-profile-save btn-sm btn-lg btn-md "> Save Change
                            </button>
                        </div>
                        <div className="col-12 col-lg-4 col-xl-4  d-grid my-1 mx-auto">
                            <button type="button" className=" btn  btn-profile-cancel"> Cancel </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default CreateVehicle