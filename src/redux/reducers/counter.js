const initialState = {
    num: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTER_INCREMENT': {
            state.num++
            return { ...state }
        }
        case 'COUNTER_DECREMENT': {
            if (state.num > 1) {
                state.num--
            }
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default counter