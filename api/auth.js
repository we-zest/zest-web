import axios from 'axios'

/**
 * 登录
 *
 * @param {*} data
 */
export const login = (data) => {
  return axios({
    url: 'auth/login',
    method: 'post',
    data
  })
}

/**
 * 个人信息
 *
 * @param {*} params
 */
export const user = (params) => {
  return axios({
    url: 'auth/me',
    method: 'get',
    params
  })
}

/**
 * 注册用户
 *
 * @param {*} data
 */
export const register = (data) => {
  return axios({
    url: 'auth/register',
    method: 'post',
    data
  })
}

/**
 * 退出登录
 */
export const logout = () => {
  return axios({
    url: 'auth/logout',
    method: 'get'
  })
}

/**
 * 修改用户信息
 *
 * @param {*} id
 * @param {*} data
 */
export const updateUser = (id, data, params = {}) => {
  return axios({
    url: `auth/${id}`,
    method: 'put',
    data,
    params
  })
}
