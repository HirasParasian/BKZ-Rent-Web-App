const detailState = {
    detail: [],
    pageInfo: {},
    isLoading: false,
    isError: false,
  }
  
  const detail = (state=detailState, action)=>{
    switch(action.type){
      case 'GET_DETAIL_PENDING': {
        state.isLoading = true
        state.isError = false
        return {...state}
      }
      case 'GET_DETAIL_FULFILLED': {
        const {data} = action.payload
        console.log(data)
        state.detail = data.results
        state.pageInfo = data.info
        state.isLoading = false
        return {...state}
      }
      case 'GET_DETAIL_REJECTED': {
        state.isLoading = false
        state.isError = true
        return {...state}
      }
      default: {
          return {...state}
      }
    }
  }
  
  export default detail