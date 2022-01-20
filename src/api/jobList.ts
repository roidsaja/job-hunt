import axios from "axios";

export const getJobList = (params) => {
    return axios.get(`https://www.themuse.com/api/public/jobs?page=${params}&api_key=${import.meta.env.API_KEY}`);
}

export const getJobById = (id) => {
    return axios.get(`https://www.themuse.com/api/public/jobs/${id}`);
}