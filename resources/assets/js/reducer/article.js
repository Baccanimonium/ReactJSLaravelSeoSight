import {GET_ARTICLES,START,SUCCESS,FAIL}  from '../constants'

const defaultArticles = {
    loading: false,
    loaded: false,
    articles: []
}


export default (state = defaultArticles, action) => {
    const payload = action.payload
    switch (action.type) {
        case GET_ARTICLES + START:
            return {
                ...state,
                loading: true,
                loaded: false
            }

        case GET_ARTICLES + SUCCESS:
            console.log('success Articles')
            return {
                ...state,
                articles: state.article.concat(action.data),
                loading: false,
                loaded: true,
                error: null
            }
        case GET_ARTICLES + FAIL:
            console.log('fail Articles')
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