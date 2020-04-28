import jwt_decode from 'jwt-decode';
import { LOGIN, LOGOUT, SIGNUP, AUTHCHECKER, GETPROFILE } from '../constants/authConstants';

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
        return
    } catch (err) {
        return err
    }
}


export const authChecker = (data) => async dispatch => {
    try {
        const decoded = jwt_decode(data);
        dispatch({
            type: AUTHCHECKER,
            payload: decoded
        })
    } catch (err) {

    }
}


export const getProfile = () => async dispatch => {
    try {
        const token = localStorage.getItem('jwt-user-token');
        const decoded = jwt_decode(token);
        const success = await Axios.get(`/api/users/get-profile/${decoded.id}`);
        dispatch({
            type: GETPROFILE,
            payload: ''
        })
        return success.data;
    } catch (err) {
        return err
    }
}


export const updateProfile = (data) => async dispatch => {
    try {
        const success = await Axios.post('/api/users/update-profile', data);
        dispatch({
            type: LOGIN,
            payload: success.data
        })
        return success.data
    } catch (err) {
        return err
    }
}