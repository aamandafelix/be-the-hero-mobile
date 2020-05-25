import axios from 'axios';

const IP_ADDRESS = '';

const api = axios.create({
    baseURL: 'http://' + IP_ADDRESS + ':3333'
});

export default api;