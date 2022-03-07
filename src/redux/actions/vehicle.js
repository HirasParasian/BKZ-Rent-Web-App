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