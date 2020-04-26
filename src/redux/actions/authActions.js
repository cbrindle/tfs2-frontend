import jwt_decode from 'jwt-decode';
import { LOGIN, LOGOUT, SIGNUP } from '../constants/authConstants';

import Axios from '../../Components/lib/Axios/Axios';
import setAuthToken from '../../Components/lib/Axios/setAuthToken';


export const signUp = (data) => async dispatch => {
    try {
        const success = await Axios.post('/api/users/signup', data);
        dispatch({
            type: SIGNUP,
            payload: success.data
        });
        return success.data
    } catch (err) {
        return err
    }
}


export const login = (data) => async dispatch => {
    try {
        const success = await Axios.post('/api/users/login', data);
        console.log(success);
        const { token } = success.data
        setAuthToken(token);
        localStorage.setItem('jwt-user-token', token);
        dispatch({
            type: LOGIN,
            payload: success.data
        });
        return {
            error: false
        }
    } catch (err) {
        console.log(err);
        return {
            error: true
        }
    }
}


export const logout = () => async dispatch => {
    try {
        localStorage.removeItem('jwt-user-token');
        dispatch({
            type: LOGOUT,
            payload: ''
        })
    } catch (err) {
        return err
    }
}