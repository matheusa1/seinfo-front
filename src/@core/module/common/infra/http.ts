import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie'

export const HTTP: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

HTTP.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err.response?.data ?? err),
)

HTTP.interceptors.request.use((req) => {
  const token = Cookies.get('token')

  if (token) {
    req.headers.Authorization = `Bearer ${token}`
  }

  return req
})
