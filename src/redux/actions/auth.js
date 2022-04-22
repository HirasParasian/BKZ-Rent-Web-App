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

export const getHistoryUser = (token) => {
    return ({
        type: 'AUTH_USER_HISTORY',
        payload: http(token).get('/myHistory')
    })
}

export const userEdit = (data, token) => {
    const param = new URLSearchParams(data)
    return ({
        type: 'AUTH_USERDATA',
        payload: http(token).patch('/profile/update', param)
    })
}

export const updateProfile = (data,token) => {
    const formData = new FormData();
    const {
      images, displayName, address, mobileNumber
    } = data;
    if (images) {
      formData.append('images', images);
    }
    if (displayName) {
      formData.append('displayName', displayName);
    }
    if (address) {
      formData.append('address', address);
    }
    if (mobileNumber) {
      formData.append('mobileNumber', mobileNumber);
    }
  
    return ({
      type: 'UPDATE_PROFILE',
      payload: http(token).patch('/profile/update', formData),
    });
  };
  



export const resetPassword = (code, email, password, confirmPassword) => {
    const params = new URLSearchParams()
    params.append('code', code)
    params.append('email', email)
    params.append('password', password)
    params.append('confirmPassword', confirmPassword)
    return {
        type: 'RESET_PASSWORD',
        payload: http().post('auth/forgotPassword', params)
    }
}

export const verifyAccount = (code, email) => {
    const params = new URLSearchParams()
    params.append('code', code)
    params.append('email', email)
    return {
        type: 'VERIFY',
        payload: http().post('auth/emailVerify2', params)
    }
}

export const requestResetPassword = (email) => {
    const params = new URLSearchParams()
    params.append('email', email)
    return {
        type: 'REQUEST_RESET_PASSWORD',
        payload: http().post('auth/forgotPassword', params),
        extra: email,
    }
}
export const requestVerifyUser = (email) => {
    const params = new URLSearchParams()
    params.append('email', email)
    return {
        type: 'REQUEST_VERIFY',
        payload: http().post('auth/emailVerify', params),
        extra: email,
    }
}