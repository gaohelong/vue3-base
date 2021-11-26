import axios from 'axios'
import qs from 'qs'
import md5 from 'md5'
import * as utils from '@/utils/utils'

/**
 * sign
 */
const sign = (params) => {
  const data = Object.assign({}, params)
  const kList = Object.keys(data).sort()
  let str = ''
  for (const i in kList) {
    const k = kList[i]
    const v = data[k]
    if (typeof v === 'object') {
      str += JSON.stringify(v) + '#'
    } else {
      str += v + '#'
    }
  }
  str += 'china2021!-'
  return md5(str)
}

// create an axios instance
// console.log(process.env)
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 30000, // request timeout
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

/**
 * 请求拦截器
 */
request.interceptors.request.use(
  config => {
    // do something before request is sent
    if (config.method === 'get') { // get
      // console.log('config.params:', config.params)
      const reqData = Object.assign({}, config.params)
      reqData.timestamp = parseInt(new Date().getTime() / 1000) + ''

      if (utils.getLocalStorage('token')) {
        reqData.token = utils.getLocalStorage('token')
      }

      reqData.platform = utils.getPlatform()
      reqData.sign = sign(reqData)
      config.params = reqData
    } else if (config.method === 'post') { // post
      // console.log('config.data:', config.data)
      const reqData = Object.assign({}, config.data)
      reqData.timestamp = parseInt(new Date().getTime() / 1000) + ''

      if (utils.getLocalStorage('token')) {
        reqData.token = utils.getLocalStorage('token')
      }

      reqData = qs.stringify(reqData)
      reqData = qs.parse(reqData)
      reqData.platform = utils.getPlatform()
      reqData.sign = sign(reqData)
      reqData = qs.stringify(reqData)
      config.data = reqData
    }

    config.headers.Authorization = utils.getLocalStorage('token')
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if (res.code === 0) { // 成功
      return {
        success: true,
        code: res.code,
        data: res.data,
        msg: res.message
      }
    } else { // 失败
      return {
        success: false,
        code: res.code,
        data: res.data,
        msg: res.message
      }
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default request
