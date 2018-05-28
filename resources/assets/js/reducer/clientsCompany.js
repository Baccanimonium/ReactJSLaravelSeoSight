import {GET_CLIENTS_COMPANY,START,SUCCESS,FAIL}  from '../constants'

const defaultClientsCompanyItems = {
    loading: false,
    loaded: false,
    clientsCompanyItems: []
}


export default (state = defaultClientsCompanyItems, action) => {
    const payload = action.payload
    switch (action.type) {
        case GET_CLIENTS_COMPANY + START:
            return {
                ...state,
                loading: true,
                loaded: false
            }

        case GET_CLIENTS_COMPANY + SUCCESS:
            return {
                ...state,
                clientsCompanyItems: state.clientsCompanyItems.concat(action.data),
                loading: false,
                loaded: true,
                error: null
            }
        case GET_CLIENTS_COMPANY + FAIL:
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