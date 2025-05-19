// src/api.js   -> Centralized API configuration file
import axios from "axios";
export default axios.create({ baseURL: process.env.REACT_APP_API_URL });