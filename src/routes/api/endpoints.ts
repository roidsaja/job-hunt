import axios from 'axios';
const base = "https://www.themuse.com/api/public/jobs";
const api_key = import.meta.env.API_KEY;

export const get = (params) => {
    return axios.get(`${base}?page=${params}&api_key=${api_key}`);
}

export const getJobById = (id) => {
    return axios.get(`${base}/${id}`);
}