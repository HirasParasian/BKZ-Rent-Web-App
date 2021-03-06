const initialState = {
    token: null,
    userData: {},
    userHistory: {},
    updated:{},
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
            state.token = data.results.token
            console.log(data)
            if (!window.localStorage.getItem('token')) {
                window.localStorage.setItem('token', state.token)
            }
            return { ...state }
        }
        case 'AUTH_LOGIN_REJECTED': {
            const { message } = action.payload.response.data
            console.log(message)
            state.isLoading = false
            state.isError = true
            state.errorMsg = message
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
            const { message } = action.payload
            // console.log(message)
            state.isLoading = false
            state.isError = true
            state.errorMsg = message
            return { ...state }
        }
        case 'UPDATE_PROFILE_PENDING': {
            state.isLoading = true
            state.isError = false
            state.errorMsg = ''
            return { ...state }
        }
        case 'UPDATE_PROFILE_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.isError = false
            state.updated = data.results
            return { ...state }
        }
        case 'UPDATE_PROFILE_REJECTED': {
            const { message } = action.payload
            // console.log(message)
            state.isLoading = false
            state.isError = true
            state.errorMsg = message
            return { ...state }
        }
        case 'AUTH_USER_HISTORY_PENDING': {
            state.isLoading = true
            state.isError = false
            state.errorMsg = ''
            return { ...state }
        }
        case 'AUTH_USER_HISTORY_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.isError = false
            state.userHistory = data.results
            return { ...state }
        }
        case 'AUTH_USER_HISTORY_REJECTED': {
            const { data } = action.payload
            state.isLoading = false
            state.isError = true
            state.errorMsg = data.message
            return { ...state }
        }
        case 'REQUEST_RESET_PASSWORD_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'REQUEST_RESET_PASSWORD_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            return { ...state }
        }
        case 'REQUEST_RESET_PASSWORD_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.message
            return { ...state }
        }
        case 'SET_EMAIL': {
            state.email = action.payload.email
            return { ...state }
        }
        case 'RESET_PASSWORD_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'RESET_PASSWORD_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            state.email = ''
            return { ...state }
        }
        case 'RESET_PASSWORD_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.message
            return { ...state }
        }
        case 'VERIFY_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'VERIFY_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            state.email = ''
            return { ...state }
        }
        case 'VERIFY_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.message
            return { ...state }
        }
        case 'REQUEST_VERIFY_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'REQUEST_VERIFY_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            return { ...state }
        }
        case 'REQUEST_VERIFY_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.message
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default auth