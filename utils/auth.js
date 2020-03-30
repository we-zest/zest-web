import Cookies from 'js-cookie'

export const TokenKey = 'nuxt_wap_token'
export const UserKey = 'nuxt_wap_user'

/**
 * Token
 */
export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

/**
 * 用户信息
 */
export function getUser () {
  return Cookies.getJSON(UserKey)
}

export function setUser (user) {
  return Cookies.set(UserKey, user)
}

export function removeUser () {
  return Cookies.remove(UserKey)
}
