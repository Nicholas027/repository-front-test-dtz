import axios from "axios";

const instance = axios.create({
  baseURL: "https://datazobacktest.onrender.com",
});

export default instance;
