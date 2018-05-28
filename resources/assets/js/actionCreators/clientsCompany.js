import {APP_URL,GET_CLIENTS_COMPANY,START,SUCCESS,FAIL}  from '../constants'
import axios from 'axios'
export const loadDataSuccess = (data, type, page = null) => {
    return {
        type: type + SUCCESS,
        data,
        page
    }
}

export function loadClientsCompanyItems() {
    return (dispatch, getState) => {
        const {clientsCompany} = getState()
        if (clientsCompany.loading || clientsCompany.loaded) return
        //
        dispatch({
            type: GET_CLIENTS_COMPANY + START,
        })
        axios.get(`${APP_URL}clients-company/`)
            .then(response => {dispatch(loadDataSuccess(response.data, GET_CLIENTS_COMPANY))})
            .catch(error => {dispatch({
                type: GET_CLIENTS_COMPANY + FAIL,
                payload: { error }
                })
            })
    }
}