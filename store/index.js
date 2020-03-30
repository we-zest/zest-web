import { cookieFromRequest } from '@/utils/cookie'
import { TokenKey, getToken, getUser, UserKey } from '@/utils/auth'

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    const token = cookieFromRequest(req, TokenKey)

    if (token) {
      commit('auth/SET_TOKEN', token)
    }

    const user = cookieFromRequest(req, UserKey)

    if (user) {
      commit('auth/SET_USER', JSON.parse(user))
    }
  },

  nuxtClientInit ({ commit }) {
    const token = getToken()

    if (token) {
      commit('auth/SET_TOKEN', token)
    }

    const user = getUser()

    if (user) {
      commit('auth/SET_USER', user)
    }
  }
}
