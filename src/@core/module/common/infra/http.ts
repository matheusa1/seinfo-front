import axios, { AxiosInstance } from 'axios'

export const HTTP: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
})

HTTP.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err.response?.data ?? err),
)
