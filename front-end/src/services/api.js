import axios from 'axios';

const api = axios.create({
    baseURL: 'http://162.214.198.80:8080/v1',
});
export default api;