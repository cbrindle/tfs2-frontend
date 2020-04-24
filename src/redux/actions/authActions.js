import jwt_decode from 'jwt-decode';
import { LOGIN, LOGOUT, SIGNUP } from '../constants/authConstants';

import Axios from '../../Components/lib/Axios/Axios';
import setAuthToken from '../../Components/lib/Axios/setAuthToken';