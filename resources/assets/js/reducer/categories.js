import {GET_CATEGORIES,START,SUCCESS,FAIL}  from '../constants'

const defaultCategories = {
    loading: false,
    loaded: false,
    categories: []
}


export default (state = defaultCategories, action) => {
    const payload = action.payload
    switch (action.type) {
        case GET_CATEGORIES + START:
            return {
                ...state,
                loading: true,
                loaded: false
            }

        case GET_CATEGORIES + SUCCESS:
            return {
                ...state,
                categories: state.categories.concat(action.data),
                loading: false,
                loaded: true,
                error: null
            }
        case GET_CATEGORIES + FAIL:
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