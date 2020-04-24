import axios from 'axios';

const Axios = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '',
    timeout: 10000,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
    // headers: 'Access-Control-Allow-Origin'
});

export default Axios;