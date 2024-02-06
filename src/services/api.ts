import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5173/api/",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});