import { default as axios } from 'axios'
const { REACT_APP_URL } = process.env

export const getPopularInTown = () => {
    return {
        type: 'GET_POPULAR_IN_TOWN',
        payload: axios.get(`${REACT_APP_URL}/vehicles/popularintown?location`)
    }
}
export const getCars = () => {
    return {
        type: 'GET_CARS',
        payload: axios.get(`${REACT_APP_URL}/vehicles?category=3`)
    }
}
export const getMotors = () => {
    return {
        type: 'GET_MOTORS',
        payload: axios.get(`${REACT_APP_URL}/vehicles?category=2`)
    }
}
export const getBikes = () => {
    return {
        type: 'GET_BIKES',
        payload: axios.get(`${REACT_APP_URL}/vehicles?category=1`)
    }
}
export const getPopularNext = (url) => {
    return {
        type: 'GET_POPULAR_IN_TOWN',
        payload: axios.get(`${url}`)

    }
}
console.log(REACT_APP_URL)
export const filterVehicles = (name, gender) => {
    // const params = new URLSearchParams()
    // params.append('name', name)
    // params.append('gender', gender)
    return {
        type: 'VEHICLES',
        payload: axios.get(`${REACT_APP_URL}/vehicles?name=${name}&gender=${gender}`)
        // payload: axios.post(`/auth/login`, params)
    }
}