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
const config = 'http://34.64.109.170:8080'
const token = sessionStorage.getItem('token');

const header = {
    "X-AUTH-TOKEN": `${token}`
}

const axiosInfo = {
    config,
    token,
    header,
}
export {axiosInfo};

export default API;