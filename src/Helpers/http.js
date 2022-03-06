import { default as axios } from 'axios'

export const getData = async (url, history) => {
    try {
        const data = await axios.get(url)
        return data
    } catch (e) {
        if (e.message.includes('404')) {
            history.push('/404')
        }
    }
}
const { REACT_APP_BACKEND_URL } = process.env

const http = (token) => {
    const headers = {}
    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }
    return axios.create({
        baseURL: REACT_APP_BACKEND_URL,
        headers
    })
}
export default (axios, http)