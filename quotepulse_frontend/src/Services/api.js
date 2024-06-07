import axios from "axios";

const url = "http://localhost:8083/"

const saveAll = (quotes) => axios.post(url + "quotes/saveAll", quotes);
const getAll = () => { return axios.get(url + "quotes/getAll") }
const getRandomQuotes = () => { return axios.get(url + "quotes/rand") }

export { saveAll, getAll, getRandomQuotes }
