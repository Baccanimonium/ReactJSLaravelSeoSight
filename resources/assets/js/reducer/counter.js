import {GET_COUNTERS,START,SUCCESS,FAIL}  from '../constants'

const defaultCounters = {
    loading: false,
    loadedPages: [],
    counters: []
}


export default (state = defaultCounters, action) => {
    const payload = action.payload

    switch (action.type) {
        case GET_COUNTERS + START:
            return {
                ...state,
                loading: true
            }

        case GET_COUNTERS + SUCCESS:
            return {
                ...state,
                counters: state.counters.concat(action.data),
                loading: false,
                loadedPages: state.loadedPages.concat(action.page),
                error: null
            }
        case GET_COUNTERS + FAIL:
                return {
                    ...state,
                    loading: false,
                    error: payload
                }
        default:
            return state
    }
}