const initialState = {
	results: [],
	pageInfo: {},
	isLoading:false,
	isError:false,
	errorMsg : ''
}

const vehicle = (state = initialState, action)=>{
	switch(action.type){
	case 'GET_VEHICLE_PENDING':{
		state.isLoading = true
		state.isError = false
		return {...state}
	}
	case 'GET_VEHICLE_FULFILLED':{
		const {data} = action.payload
		state.isLoading = false
		state.isError = false
		state.results = data.results
		state.pageInfo = data.pageInfo
		return {...state}
	}
	case 'GET_VEHICLE_REJECTED':{
		state.isLoading = false
		state.isError = true
		console.log(action.payload)
		state.errorMsg = ''
		return {...state}
	}
	default:{
		return {...state}
	}
	}
}

export default vehicle