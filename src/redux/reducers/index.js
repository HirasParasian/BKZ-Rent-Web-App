import { combineReducers } from "redux";

const initialState = {
    token: null
}

const counterState = {
    num: 0
}

const popularState = {
    popularInTown: [],
    pageInfo: {},
    isLoading: false,
    error: false
}
// const carsState = {
//     cars: [],
//     pageInfo: {},
//     isLoading: false,
//     error: false
// }
// const motorsState = {
//     motors: [],
//     pageInfo: {},
//     isLoading: false,
//     error: false
// }
// const bikesState = {
//     bikes: [],
//     pageInfo: {},
//     isLoading: false,
//     error: false
// }

const rootReducer = combineReducers({
    auth: (state = initialState, action) => {
        switch (action.type) {
            case 'LOGIN': {
                const { email, password } = action.payload
                if (email === 'admin@mail.com' && password === '1234') {
                    state.token = 'abc'
                    return state
                } else {
                    alert('Wrong username or password!')
                    state.token = null
                    return state
                }
            }
            case 'LOGOUT': {
                state.token = null
                return state
            }
            default: {
                return { ...state }
            }
        }
    },
    counter: (state = counterState, action) => {
        switch (action.type) {
            case 'INCREMENT': {
                state.num = state.num + 1
                return state
            }
            case 'DECREMENT': {
                state.num = state.num - 1
                return state
            }
            default: {
                return { ...state }
            }
        }
    },

    popularInTown: (state = popularState, action) => {
        switch (action.type) {
            case 'GET_POPULAR_IN_TOWN': {
                state.isLoading = true
                return state
            }
            case 'GET_POPULAR_IN_TOWN_FULFILLED': {
                const { data } = action.payload
                state.popularInTown = data.results
                state.next = data.pageInfo.next
                state.pageInfo = data.pageInfo
                state.isLoading = false
                return state
            }
            case 'GET_POPULAR_IN_TOWN_REJECTED': {
                state.isLoading = false
                state.isError = true
                return state
            }
            default: {
                return state
            }
        }
    },
    // cars: (state = carsState, action) => {
    //     switch (action.type) {
    //         case 'GET_CARS': {
    //             state.isLoading = true
    //             return state
    //         }
    //         case 'GET_CARS_FULFILLED': {
    //             const { data } = action.payload
    //             state.cars = data.results
    //             state.pageInfo = data.info
    //             state.isLoading = false
    //             return state
    //         }
    //         case 'GET_CARS_REJECTED': {
    //             state.isLoading = false
    //             state.isError = true
    //             return state
    //         }
    //         default: {
    //             return state
    //         }
    //     }
    // },
    // motors: (state = motorsState, action) => {
    //     switch (action.type) {
    //         case 'GET_MOTORS': {
    //             state.isLoading = true
    //             return state
    //         }
    //         case 'GET_MOTORS_FULFILLED': {
    //             const { data } = action.payload
    //             state.motors = data.results
    //             state.pageInfo = data.info
    //             state.isLoading = false
    //             return state
    //         }
    //         case 'GET_MOTORS_REJECTED': {
    //             state.isLoading = false
    //             state.isError = true
    //             return state
    //         }
    //         default: {
    //             return state
    //         }
    //     }
    // },
    // bikes: (state = bikesState, action) => {
    //     switch (action.type) {
    //         case 'GET_BIKES': {
    //             state.isLoading = true
    //             return state
    //         }
    //         case 'GET_BIKES_FULFILLED': {
    //             const { data } = action.payload
    //             state.bikes = data.results
    //             state.pageInfo = data.info
    //             state.isLoading = false
    //             return state
    //         }
    //         case 'GET_BIKES_REJECTED': {
    //             state.isLoading = false
    //             state.isError = true
    //             return state
    //         }
    //         default: {
    //             return state
    //         }
    //     }
    // },
})
export default rootReducer