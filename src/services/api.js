import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-production-577e.up.railway.app/'
})

export default api

