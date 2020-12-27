import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT, USER_REGISTER_ACCOUNT_FAIL,
    USER_REGISTER_ACCOUNT_REQUEST, USER_REGISTER_ACCOUNT_SUCCESS
} from "../constants/userContaints";
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/users/login', {email, password},
            config);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response &&
            error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    dispatch({
        type: USER_LOGOUT,
        payload: {}
    });
    localStorage.removeItem("userInfo");
}

export const userRegister = (username, email, password, birthday, gender, phoneNumber) => async dispatch => {
    try {
        dispatch({
            type: USER_REGISTER_ACCOUNT_REQUEST
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/users/register', {
                name: username,
                email,
                password,
                phoneNumber,
                gender,
                birthday
            },
            config);

        dispatch({
            type: USER_REGISTER_ACCOUNT_SUCCESS,
            payload: data
        });

        dispatch(login(email,password));

    } catch (error) {
        dispatch({
            type: USER_REGISTER_ACCOUNT_FAIL,
            payload: error.response &&
            error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}