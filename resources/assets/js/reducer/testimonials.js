import {GET_TESTIMONIALS,GET_LATEST_TESTIMONIALS,START,SUCCESS,FAIL}  from '../constants'

const defaultTestimonials = {
    loading: false,
    loaded: false,
    loadedPartOfTestimonials: false,
    testimonials: []
}


export default (state = defaultTestimonials, action) => {
    const payload = action.payload
    switch (action.type) {
        case GET_TESTIMONIALS + START:
            return {
                ...state,
                loading: true,
                loaded: false
            }

        case GET_TESTIMONIALS + SUCCESS:
            return {
                ...state,
                testimonials: state.testimonials.concat(action.data),
                loading: false,
                loaded: true,
                error: null
            }
        case GET_LATEST_TESTIMONIALS + SUCCESS:
            return {
                ...state,
                testimonials: state.testimonials.concat(action.data),
                loading: false,
                loadedPartOfTestimonials: true,
                error: null
            }
        case GET_TESTIMONIALS + FAIL:
            console.log('fail Testimonials')
                return {
                    ...state,
                    loading: false,
                    loaded: false,
                    error: payload
                }
        default:
            return state
    }
}