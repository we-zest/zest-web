import axios from 'axios'
// import { notification } from 'ant-design-vue'
import collect from 'collect.js'
import * as codes from '@/utils/http-status-code'

export default ({ app, store, redirect }) => {
  // 设置 axios 请求 host
  axios.defaults.baseURL = process.env.BASE_API

  // 禁止服务端执行拦截器「服务端不会释放 axios 会导致执行多次拦截器」
  if (process.server) {
    return
  }
  // axios 请求前置
  axios.interceptors.request.use(
    (config) => {
      // 请求参数处理
      if (config.params) {
        // 删除空参数
        for (const key in config.params) {
          if (!config.params[key]) {
            delete config.params[key]
          }
        }
      }

      config.headers['Access-Control-Allow-Credentials'] = true

      // Bearer Token
      const token = store.getters.token

      if (token) {
        config.headers.common.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // axios 返回前置
  axios.interceptors.response.use(
    (res) => {
      const status = res.status || ''
      // let message = null

      switch (status) {
        // 已创建|已更新
        /* case codes.CREATED:
          message = '创建/更新成功！'
          break */
        // 已接收（适用于队列）
        case codes.ACCEPTED:
          // message = '操作正在进行。'
          break
          // 操作完成（适用于局部更新、其它操作）
        case codes.NO_CONTENT:
          // message = '操作成功！'
          break
          // 操作完成（需要刷新页面）
        case codes.RESET_CONTENT:
          // message = '操作成功！'
          break
        default:
          return Promise.resolve(res)
      }
      // notification.success({
      //   message,
      //   duration: 10
      // })
      return Promise.resolve(res)
    },
    (error) => {
      const data = error.response ? error.response.data : error
      // // let message = error.response && error.response.message
      switch (data.status_code) {
        case codes.BAD_REQUEST:
          // message = data.message
          break
        case codes.UNAUTHORIZED:
          // message = data.message
          // store.dispatch('auth/resetToken')
          redirect({ path: '/login' })
          break
        case codes.FORBIDDEN:
          // message = data.message || '权限受限！'
          break
        case codes.NOT_FOUND:
          // message = data.message || '数据不存在'
          break
        case codes.METHOD_NOT_ALLOWED:
          break
        case codes.NOT_ACCEPTABLE:
          break
        case codes.TIMEOUT:
          // message = data.message || '请求超时！'
          break
        case codes.CONFLICT:
          break
        case codes.PAYLOAD_TOO_LARGE:
          break
        case codes.UNPROCESSABLE_ENTITY:
          collect(data.result).map((errors, index) => {
            // notification.error({
            //   message: errors.join(';'),
            //   duration: 10
            // })
          })

          return Promise.reject(error)
        case codes.TOO_MANY_REQUESTS:
          // message = data.message || '请求次数过多'
          break
        case codes.INTERNAL_SERVER_ERROR:
        case codes.NOT_IMPLEMENTED:
        case codes.BAD_GATEWAY:
        case codes.SERVICE_UNAVAILABLE:
        case codes.GATEWAY_TIMEOUT:
          // message = data.message || '服务器开了会小差，请稍后再进行尝试。'
          break
        default:
          // message = '请求过于频繁，请稍后再来'
      }
      // notification.error({
      //   message,
      //   duration: 10
      // })

      return Promise.reject(error)
    }
  )
}
