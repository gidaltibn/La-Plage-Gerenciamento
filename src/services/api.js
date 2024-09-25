import axios from "axios";

const api = axios.create({
    baseURL:'https://laplage-api.herokuapp.com/', //url heroku
});

export default api;
