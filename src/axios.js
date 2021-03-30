import Axios from "axios";

export const axios = Axios.create({
    baseURL : " https://coronavirus-19-api.herokuapp.com",
    headers: {Auth: "Simple Auth"},
    timeout: 3000,
})