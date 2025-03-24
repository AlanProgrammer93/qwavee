import axios from 'axios';
// https://qwavee.onrender.com
const clientAxios = axios.create({
    baseURL: `https://qwavee.onrender.com`
});

export default clientAxios;