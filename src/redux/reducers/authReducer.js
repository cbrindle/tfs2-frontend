import { LOGIN, LOGOUT, SIGNUP } from '../constants/authConstants';

const initialState = {
    isAuth: false,
    name: '',
    email: ''
}

export default function (state = initialState, action) {

    switch (action.type) {

        case LOGIN:
            return {
                ...state
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
                ...state,
            }

        default:
            return {
                ...state
            }
    }

}