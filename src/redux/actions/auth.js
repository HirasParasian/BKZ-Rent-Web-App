import http from '../../helpers/http'


export const login = (username, password) => {
    const param = new URLSearchParams()
    param.append('username', username)
    param.append('password', password)
    return ({
        type: 'AUTH_LOGIN',
        payload: http().post('/auth/login', param)
    })
}

export const getDataUser = (token) => {
    return ({
        type: 'AUTH_USERDATA',
        payload: http(token).get('/profile')
    })
}

export const userEdit = (data, userId) => {
    const param = new URLSearchParams(data)

    return ({
        type: 'AUTH_USERDATA',
        payload: http().patch(`users/profile/:${userId}`, param)
    })
}