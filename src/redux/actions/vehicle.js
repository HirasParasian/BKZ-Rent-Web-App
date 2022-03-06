import { default as axios } from 'axios'
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
