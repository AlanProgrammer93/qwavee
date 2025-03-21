import axios from 'axios';

const clientAxios = axios.create({
    baseURL: `https://qwavee.onrender.com`
});

export default clientAxios;