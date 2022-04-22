import { default as axios } from 'axios'
import http from '../../helpers/http'
const { REACT_APP_URL } = process.env

export const getPopularInTown = () => {
    return {
        type: 'GET_POPULAR_IN_TOWN',
        payload: axios.get(`${REACT_APP_URL}/vehicles/popularintown?location`)
    }
}
export const getPopularNext = (url) => {
    return {
        type: 'GET_VEHICLE',
        payload: axios.get(`${url}`)

    }
}
export const getCategory = (data) => {
    return {
        type: 'GET_VEHICLE',
        payload: axios.get(`${REACT_APP_URL}/vehicles?category=${data}`)
    }
}

export const getVehicleById = (vehicleId) => {
    return {
        type: 'GET_VEHICLE',
        payload: http().get(`/vehicles/id?vehicleId=${vehicleId}`)
    }
}
export const getPopularHttp = () => {
    return {
        type: 'GET_VEHICLE',
        payload: http().get('/vehicles/popularintown?location')
    }
}
export const searchVehicle = (name, category) => {
    return {
        type: 'GET_VEHICLE',
        payload: http().get(`/vehicles?limit=12&search=${name}&category=${category}`)
    }
}

export const createVehicle = (data,token) => {
    const formData = new FormData();
    const {
      image, name, location, price, category,stock,description
    } = data;
    if (image) {
      formData.append('image', image);
    }
    if (name) {
      formData.append('name', name);
    }
    if (location) {
      formData.append('location', location);
    }
    if (price) {
      formData.append('price', price);
    }
    if (category) {
        formData.append('category', category);
    }

    if (description) {
    formData.append('description', description);
    }

    if (stock) {
    formData.append('stock', stock);
    }
    
  
    return ({
      type: 'CREATE_VEHICLE',
      payload: http(token).post('vehicles/create', formData),
    });
  };
  