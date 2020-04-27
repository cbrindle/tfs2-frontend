import axios from 'axios';

const Axios = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '' : '',
    timeout: 5000,
    crossdomain: true,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
    // headers: 'Access-Control-Allow-Origin'
});

export default Axios;