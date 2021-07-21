import axios from 'axios';

// header 있을때
const API = axios.create({
    baseURL: 'http://34.64.109.170:8080',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
} );

// api 주소만 사용할때 ${config} 로 사용
export const config = 'http://34.64.109.170:8080'

export default API;