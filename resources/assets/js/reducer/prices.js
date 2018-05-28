import {GET_LOAD_PRICES,START,SUCCESS,FAIL}  from '../constants'

const defaultPrices = {
    loading: false,
    loaded: false,
    prices: []
}


export default (state = defaultPrices, action) => {
    const payload = action.payload
    switch (action.type) {
        case GET_LOAD_PRICES + START:
            return {
                ...state,
                loading: true,
                loaded: false
            }

        case GET_LOAD_PRICES + SUCCESS:
            return {
                ...state,
                prices: state.prices.concat(action.data),
                loading: false,
                loaded: true,
                error: null
            }
        case GET_LOAD_PRICES + FAIL:
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    error: payload
                }
        default:
            return state
    }
}