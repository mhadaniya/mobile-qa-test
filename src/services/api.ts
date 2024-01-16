
import axios, { AxiosInstance } from 'axios'

const createInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: {
      Accept: 'application/json'
    }
  })

  instance.interceptors.request.use(
    async (config): Promise<unknown> => {
      return config
    },
    async (error) => {
      return await Promise.reject(error)
    }
  )

  return instance
}

export const instance = createInstance(process.env.REACT_APP_BASE_URL ?? '')
