import {GET_SLIDES,START,SUCCESS,FAIL}  from '../constants'

const defaultSlides = {
    loading: false,
    loaded: false,
    slides: []
}


export default (state = defaultSlides, action) => {
    const payload = action.payload
    switch (action.type) {
        case GET_SLIDES + START:
            return {
                ...state,
                loading: true,
                loaded: false
            }

        case GET_SLIDES + SUCCESS:
            return {
                ...state,
                slides: state.slides.concat(action.data),
                loading: false,
                loaded: true,
                error: null
            }
        case GET_SLIDES + FAIL:
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