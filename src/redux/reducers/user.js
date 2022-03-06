const initialState = {
	isLoading: false,
	isError: false,
	successMsg: '',
	errorMsg: ''
}

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'USER_SIGNUP_PENDING': {
			state.isLoading = true
			state.isError = false
			state.errorMsg = ''
			state.successMsg = ''
			return { ...state }
		}
		case 'USER_SIGNUP_FULFILLED': {
			const { data } = action.payload
			state.isLoading = false
			state.isError = false
			state.successMsg = data.message
			console.log(data.results)
			return { ...state }
		}
		case 'USER_SIGNUP_REJECTED': {
			const { message } = action.payload.response.data
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

export default user