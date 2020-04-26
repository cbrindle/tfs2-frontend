import { LOGIN, LOGOUT, SIGNUP, AUTHCHECKER } from '../constants/authConstants';

const initialState = {
    isAuth: false,
    name: '',
    email: ''
}

export default function (state = initialState, action) {

    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                isAuth: true,
                name: action.payload.name,
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
                name: action.payload.name
            }

        default:
            return {
                ...state
            }
    }

}