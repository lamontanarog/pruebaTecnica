 import axios from "axios";

 const API_URL = "https://pruebatecnica-wh8i.onrender.com/api/tests";

 export const getTests = () => axios.get(`${API_URL}/`);
 export const getTestById = (id) => axios.get(`${API_URL}/${id}`);
 export const createTest = (test) => axios.post(`${API_URL}/`, test);