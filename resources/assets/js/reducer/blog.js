import {GET_BLOGITEMS,GET_LATEST_BLOGITEMS,START,SUCCESS,FAIL}  from '../constants'

const defaultBlogItems = {
    loading: false,
    loaded: false,
    loadedPartOfBlogItems: false,
    blogItems: []
}


export default (state = defaultBlogItems, action) => {
    const payload = action.payload
    switch (action.type) {
        case GET_BLOGITEMS + START:
            return {
                ...state,
                loading: true,
                loaded: false
            }

        case GET_BLOGITEMS + SUCCESS:
            return {
                ...state,
                blogItems: state.blogItems.concat(action.data),
                loading: false,
                loaded: true,
                error: null
            }
        case GET_LATEST_BLOGITEMS + SUCCESS:
            return {
                ...state,
                blogItems: state.blogItems.concat(action.data),
                loading: false,
                loadedPartOfBlogItems: true,
                error: null
            }
        case GET_BLOGITEMS + FAIL:
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