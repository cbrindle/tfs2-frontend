import { LOGIN, LOGOUT, SIGNUP, AUTHCHECKER, GETPROFILE } from '../constants/authConstants';

const initialState = {
    isAuth: false,
    userName: '',
    email: ''
}

export default function (state = initialState, action) {

    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                isAuth: true,
                userName: action.payload.userName,
                email: action.payload.email
            }

        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                name: '',
                email: ''
            }

        case SIGNUP:
            return {
                ...state
            }

        case AUTHCHECKER:
            return {
                ...state,
                isAuth: true,
                email: action.payload.email,
                name: action.payload.userName
            }

        case GETPROFILE:
            return {
                ...state
            }

        default:
            return {
                ...state
            }
    }

}