import React from 'react'
import {GET_COUNTERS,GET_ARTICLES,GET_CASES,GET_CASES_PART,GET_LOAD_PRICES,GET_SLIDES,START,SUCCESS,FAIL,
    GET_TESTIMONIALS,GET_LATEST_TESTIMONIALS,GET_BLOGITEMS,GET_LATEST_BLOGITEMS,GET_CLIENTS_COMPANY,GET_CATEGORIES
}  from '../constants'
import { Redirect } from 'react-router'
import axios from 'axios'


// перенести все проверки для загрузки данных из компонентов сюда
export const loadDataSuccess = (data, type, page = null) => {
    return {
        type: type + SUCCESS,
        data,
        page
    }
}
export function loadArticle() {
    return (dispatch) => {
        dispatch({
            type: GET_ARTICLES + START,
        })
        return axios.get('http://127.0.0.1:8000/menu_items')

                .then(response => {dispatch(loadDataSuccess(response.data, GET_ARTICLES))})
                .catch(error => {dispatch({
                    type: GET_ARTICLES + FAIL,
                    payload: { error }
                    })
                    dispatch(<Redirect to="/not_found"/>)
                })
    }
}
export function loadCounters(page) {
    return (dispatch) => {

        dispatch({
            type: GET_COUNTERS + START,
        })
        return axios.get(`http://127.0.0.1:8000/counters${page}`)

                .then(response => {dispatch(loadDataSuccess(response.data, GET_COUNTERS,page))})
                .catch(error => {dispatch({
                    type: GET_COUNTERS + FAIL,
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

export function loadPartOfCases(count) {
    return (dispatch) => {
        dispatch({
            type: GET_CASES + START,
        })
        return axios.get(`http://127.0.0.1:8000/cases/recent/${count}`)
            .then(response => {dispatch(loadDataSuccess(response.data, GET_CASES_PART))})
            .catch(error => {dispatch({
                type: GET_CASES + FAIL,
                payload: { error }
            })
                dispatch(<Redirect to="/not_found"/>)
            })
    }
}

export function loadPrices() {
    return (dispatch) => {
        dispatch({
            type: GET_LOAD_PRICES + START,
        })
        axios.get('http://127.0.0.1:8000/prices')
            .then(response => {dispatch(loadDataSuccess(response.data, GET_LOAD_PRICES))})
            .catch(error => {dispatch({
                type: GET_LOAD_PRICES + FAIL,
                payload: { error }
            })
                dispatch(<Redirect to="/not_found"/>)
            })
    }
}export function loadSlides() {
    return (dispatch) => {

        dispatch({
            type: GET_SLIDES + START,
        })
        axios.get('http://127.0.0.1:8000/slides')
            .then(response => {dispatch(loadDataSuccess(response.data, GET_SLIDES))})
            .catch(error => {dispatch({
                type: GET_SLIDES + FAIL,
                payload: { error }
            })
                dispatch(<Redirect to="/not_found"/>)
            })
    }
}

export function loadTestimonials() {
    return (dispatch) => {
        dispatch({
            type: GET_TESTIMONIALS + START,
        })
        axios.get('http://127.0.0.1:8000/testimonials')
            .then(response => {dispatch(loadDataSuccess(response.data, GET_TESTIMONIALS))})
            .catch(error => {dispatch({
                type: GET_TESTIMONIALS + FAIL,
                payload: { error }
            })
                dispatch(<Redirect to="/not_found"/>)
            })
    }
}

export function loadLatestTestimonials(count) {
    return (dispatch) => {
        dispatch({
            type: GET_LATEST_TESTIMONIALS + START,
        })
        return axios.get(`http://127.0.0.1:8000/testimonials/recent/${count}`)
            .then(response => {dispatch(loadDataSuccess(response.data, GET_LATEST_TESTIMONIALS))})
            .catch(error => {dispatch({
                type: GET_LATEST_TESTIMONIALS + FAIL,
                payload: { error }
            })
                dispatch(<Redirect to="/not_found"/>)
            })
    }
}
export function loadBlogItems() {
    return (dispatch) => {
        dispatch({
            type: GET_BLOGITEMS + START,
        })
        axios.get('http://127.0.0.1:8000/blog')
            .then(response => {dispatch(loadDataSuccess(response.data, GET_BLOGITEMS))})
            .catch(error => {dispatch({
                type: GET_BLOGITEMS + FAIL,
                payload: { error }
            })
                dispatch(<Redirect to="/not_found"/>)
            })
    }
}

export function loadLatestBlogItems(count) {
    return (dispatch) => {
        dispatch({
            type: GET_LATEST_BLOGITEMS + START,
        })
        return axios.get(`http://127.0.0.1:8000/blog/recent/${count}`)
            .then(response => {dispatch(loadDataSuccess(response.data, GET_LATEST_BLOGITEMS))})
            .catch(error => {dispatch({
                type: GET_LATEST_BLOGITEMS + FAIL,
                payload: { error }
            })
                dispatch(<Redirect to="/not_found"/>)
            })
    }
}
export function loadClientsCopmanyItems() {
    return (dispatch) => {
        dispatch({
            type: GET_CLIENTS_COMPANY + START,
        })
        axios.get('http://127.0.0.1:8000/clients-company')
            .then(response => {dispatch(loadDataSuccess(response.data, GET_CLIENTS_COMPANY))})
            .catch(error => {dispatch({
                type: GET_CLIENTS_COMPANY + FAIL,
                payload: { error }
            })
                dispatch(<Redirect to="/not_found"/>)
            })
    }
}
export function loadCategories() {
    return (dispatch) => {
        dispatch({
            type: GET_CATEGORIES + START,
        })
        return axios.get('http://127.0.0.1:8000/categories')

            .then(response => {dispatch(loadDataSuccess(response.data, GET_CATEGORIES))})
            .catch(error => {dispatch({
                type: GET_CATEGORIES + FAIL,
                payload: { error }
            })
                dispatch(<Redirect to="/not_found"/>)
            })
    }
}