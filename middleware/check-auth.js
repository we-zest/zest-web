import axios from 'axios'

export default async ({ store, req }) => {
  const token = store.getters.token

  if (process.server) {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    } else {
      delete axios.defaults.headers.common.Authorization
    }
  }

  if (!store.getters.check && token) {
    await store.dispatch('auth/getUser')
  }
}
