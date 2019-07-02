import axios from 'axios'
import { API_URL } from '../config/config'

const api = axios.create({
    baseURL: API_URL
});

export default api