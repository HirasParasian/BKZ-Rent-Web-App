import http from '../../helpers/http'

export const userSignUp = (username, email, password) => {
    const param = new URLSearchParams()
    param.append('username', username)
    param.append('email', email)
    param.append('password', password)
    return ({
        type: 'USER_SIGNUP',
        payload: http().post('/users/register', param)
    })
}
