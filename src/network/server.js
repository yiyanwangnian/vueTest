
import axios from 'axios'

function fetch (method) {
  return function (options) {
    return new Promise((resolve, reject) => {
      const instance = axios.create({
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30 * 1000
      })
      const requestOpt = {
        ...options,
        method: method
      }
      instance(requestOpt).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
const Server = {
  get: fetch('get'),
  post: fetch('post')
}
export default Server
