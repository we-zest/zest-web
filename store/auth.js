import { getToken, getUser, setToken, setUser, removeToken, removeUser } from '@/utils/auth'
import { login, user, logout, updateUser } from '@/api/auth'

/**
 * 状态数变量
 */
export const state = () => ({
  token: getToken(),
  user: getUser(),
  intended: null
})

/**
 * 设置状态数变量
 */
export const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.user = user
  },
  LOGOUT: (state) => {
    state.token = null
    state.user = null
  },
  SET_INTENDED: (state, intended) => {
    state.intended = intended
  }
}

/**
 * 异步方法处理
 */
export const actions = {
  // 设置目标地点
  setIntended ({ commit }, intended) {
    commit('SET_INTENDED', intended)
  },
  // 跳转目标地址「主要用于登录后跳转到登录之前的网址」
  goIntended ({ commit, state }, route) {
    if (state.intended) {
      const intended = state.intended
      commit('SET_INTENDED', null)
      return this.$router.push(intended)
    }

    return this.$router.push(route)
  },
  // 用户登录
  login ({ commit }, credentials) {
    const { username, password } = credentials
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password })
        .then(({ data }) => {
          commit('SET_TOKEN', data.access_token)
          setToken(data.access_token)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  /**
   * 修改用户信息
   *
   * @param {*} param0
   * @param {*} params
   */
  async updateUser ({ commit, state }, params) {
    const include = {
      include: [
        'user_info',
        'user_verifies'
      ]
    }
    try {
      const { data } = await updateUser(state.user.id, params, include)
      commit('SET_USER', data)
      setUser(data)

      return data
    } catch (e) {
      return e
    }
  },
  // 获取用户信息
  getUser ({ commit }, extIncludes = []) {
    return new Promise((resolve, reject) => {
      const params = {
        include: [
          'user_info',
          'user_verifies',
          ...extIncludes
        ]
      }
      user(params)
        .then(({ data }) => {
          commit('SET_USER', data)
          setUser(data)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // 退出登录
  async logout ({ commit }) {
    await logout()
    removeToken()
    removeUser()
    commit('LOGOUT')
  }
}
