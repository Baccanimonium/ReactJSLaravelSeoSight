import {GET_CASES,GET_CASES_PART,GET_CASE,START,SUCCESS,FAIL}  from '../constants'

const defaultCases = {
    loading: false,
    loaded: false,
    loadedPartOfCases: false,
    cases: [],
    partOfCases: [],
    caseItem: [],
    caseItemList:[]

}


export default (state = defaultCases, action) => {
    const payload = action.payload
    switch (action.type) {
        case GET_CASES + START:
            return {
                ...state,
                loading: true,
                loaded: false
            }

        case GET_CASES + SUCCESS:

            const wrappedData = action.data.reduce((acc, el, i) => {
                el.cat=el.categories.map((cat, index) => (
                       cat.url
                    ))
                // delete el.categories
                acc.push(el)
                return acc
            }, [])

            return {
                ...state,
                cases: state.cases.concat(wrappedData),
                loading: false,
                loaded: true,
                error: null
            }
        case GET_CASES_PART + SUCCESS:
            return {
                ...state,
                partOfCases: state.partOfCases.concat(action.data),
                loading: false,
                loadedPartOfCases: true,
                error: null
            }
        case GET_CASE + SUCCESS:
            return {
                ...state,
                caseItem: state.caseItem.concat(action.data),
                caseItemList: state.caseItemList.concat(action.page),
                loading: false,
                error: null
            }
        case GET_CASES + FAIL || GET_CASE + FAIL:
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