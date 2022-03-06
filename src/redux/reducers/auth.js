const initialState = {
    token: null,
    userData: {},
    isLoading: false,
    isError: false,
    errorMsg: ''
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN_PENDING': {
            state.isLoading = true
            state.isError = false
            state.errorMsg = ''
            return { ...state }
        }
        case 'AUTH_LOGIN_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.isError = false
            state.token = data.results
            window.localStorage.setItem('token', state.token)
            return { ...state }
        }
        case 'AUTH_LOGIN_REJECTED': {
            state.isLoading = false
            state.isError = true
            state.errorMsg = 'check your email, username, and password'
            return { ...state }
        }
        case 'AUTH_LOGOUT': {
            state.token = null
            state.userData = {}
            window.localStorage.removeItem('token')
            return { ...state }
        }
        case 'AUTH_USERDATA_PENDING': {
            state.isLoading = true
            state.isError = false
            state.errorMsg = ''
            return { ...state }
        }
        case 'AUTH_USERDATA_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.isError = false
            state.userData = data.results
            return { ...state }
        }
        case 'AUTH_USERDATA_REJECTED': {
            const { message } = action.payload.response.data
            console.log(message)
            state.isLoading = false
            state.isError = true
            state.errorMsg = message
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default auth