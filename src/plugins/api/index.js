import axios from 'axios'

const apiUrl = process.env.APP_API_URL

export const http = axios.create({
  baseURL: apiUrl
})

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return http
    }
  })
}
