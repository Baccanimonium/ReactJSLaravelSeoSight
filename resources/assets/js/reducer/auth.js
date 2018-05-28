import {LOGIN,GET_USER,LOGOUT,REGISTER,SEND_INVITE,RESET_PASSWORD,FORGOT_PASSWORD,CLEAR_ERRORS,START,SUCCESS,FAIL}  from '../constants'

const defaultAuth = {
    tryLogin: false,
    login: false,
    sendInvite: false,
    sendInviteStatus:[],
    user: [],
    error: false,
    errorsData:[],
    forgotPasswordStatus:[]
}


export default (state = defaultAuth, action) => {
    const payload = action.payload
    switch (action.type) {
        case REGISTER + START:
        case FORGOT_PASSWORD + START:
        case LOGIN + START:
        case GET_USER + START:
            return {
                ...state,
                tryLogin: true,
                login: false
            }
        case SEND_INVITE + START:
            return {
                ...state,
                sendInvite: true,
                sendInviteStatus:[]
            }
        case LOGIN + SUCCESS:
            return {
                ...state,
                user: action.data,
                tryLogin: false,
                login: true,
                error: null
            }
        case REGISTER + SUCCESS:

            return {
                ...state,
                user: action.data.data,
                tryLogin: false,
                login: true,
                error: null
            }
        case GET_USER + SUCCESS:
            if (!Object.keys(action.data).length) return {
                ...state,
                tryLogin: false,
                login: false,
                error: null
            }
            return {
                ...state,
                user: action.data,
                tryLogin: false,
                login: true,
                error: null
            }
        case FORGOT_PASSWORD + SUCCESS:
            return {
                ...state,
                forgotPasswordStatus: action.data,
                tryLogin: false,
                login: false,
                error: null
            }
        case SEND_INVITE + SUCCESS:
            return {
                ...state,
                sendInviteStatus: action.data,
                sendInvite: false,
                error: null
            }
        case FORGOT_PASSWORD + FAIL:
        case REGISTER + FAIL:
        case LOGIN + FAIL:
            if (payload.error.response.data.errors === undefined){
                return {
                    ...state,
                    tryLogin: false,
                    login: false,
                    error: true,
                    errorsData: payload.error.response.data.message
                }
            }
            const getErrorsArray = Object.entries(payload.error.response.data.errors)
            const getErrorsMessage=getErrorsArray.reduce((acc, el, i) => {
                if (i === 0) {acc.push(payload.error.response.data.message)}
                acc.push(el[1].toString())
                return acc
            }, [])
                return {
                    ...state,
                    tryLogin: false,
                    login: false,
                    error: true,
                    errorsData: getErrorsMessage
                }
        case SEND_INVITE + FAIL:
                return {
                    ...state,
                    sendInvite: false,
                    error: true,
                    errorsData: payload.error.response.data.errors
                }

        case GET_USER + FAIL:
            return {
                ...state,
                tryLogin: false,
                login: false
            }

        case LOGOUT:
            return {
                ...state,
                user: [],
                tryLogin: false,
                login: false,
                error: null
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
                sendInviteStatus:[],
                errorsData:[]
            }
        default:
            return state
    }
}