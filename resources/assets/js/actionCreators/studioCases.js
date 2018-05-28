import {GET_CASES,GET_CASE,GET_CASES_PART, FAIL, START,SUCCESS,APP_URL}  from '../constants'
import axios from 'axios'
import { Redirect } from 'react-router'
import React from 'react'

export const loadDataSuccess = (data, type, page = null) => {
    return {
        type: type + SUCCESS,
        data,
        page
    }
}
export function checkAndLoadCase(caseId) {
    return (dispatch, getState) => {
        const {cases} = getState()
        // console.log(cases)
        if (cases.caseItemList.find(item=>item == caseId)) return
        //
        dispatch({
            type: GET_CASE + START,
        })
        axios.get(`${APP_URL}cases/${caseId}`)
            .then(response => {dispatch(loadDataSuccess(response.data, GET_CASE,caseId))})
            .catch(error => {dispatch({
                type: GET_CASE + FAIL,
                payload: { error }
            })
                dispatch(<Redirect to="/not_found"/>)
            })
    }
}
export function loadCases() {
    return (dispatch) => {
        dispatch({
            type: GET_CASES + START,
        })
        axios.get('http://127.0.0.1:8000/cases')
            .then(response => {dispatch(loadDataSuccess(response.data, GET_CASES))})
            .catch(error => {dispatch({
                type: GET_CASES + FAIL,
                payload: { error }
            })
                dispatch(<Redirect to="/not_found"/>)
            })
    }
}