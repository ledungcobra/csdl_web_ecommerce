import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT, USER_REGISTER_ACCOUNT_FAIL,
    USER_REGISTER_ACCOUNT_REQUEST, USER_REGISTER_ACCOUNT_SUCCESS
} from "../constants/userContaints";

export const userLoginReducer = (state= {}, action)=>{

    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }

}


export const userRegisterReducer = (state= {}, action)=>{

    switch (action.type) {
        case USER_REGISTER_ACCOUNT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_REGISTER_ACCOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case USER_REGISTER_ACCOUNT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {}
        default: return state;
    }

}