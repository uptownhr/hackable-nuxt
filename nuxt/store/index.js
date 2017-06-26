import Cookie from 'cookie'
import Cookies from 'js-cookie'

export const state = () => {
  return {
    token: null,
    current_user: null
  }
}

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  setCurrentUser (state, user) {
    state.current_user = user
  }
}

export const actions = {
  nuxtServerInit ({commit, dispatch}, {req, app}) {
    let cookieStr = req.headers.cookie
    let cookies = Cookie.parse(cookieStr || '') || {}

    let token = cookies.token

    if (token) {
      commit('setToken', token)
      app.$axios.setToken(token)
      dispatch('getCurrentUser', {axios: app.$axios})
    }
  },

  getCurrentUser ({commit}, {axios}) {
    console.log('getting currentuser')
    commit('setCurrentUser', {
      email: 'hi@hi.com'
    })
  },

  login ({commit, dispatch}, {axios, credentials}) {
    return axios
      .post('/login', credentials)
      .then(res => {
        let {token, user} = res.data

        Cookies.set('token', token)

        commit('setToken', token)
        commit('setCurrentUser', user)

        return res.data
      })
  },

  logout ({commit}, token) {
    Cookies.remove('token')

    commit('setToken', null)
    commit('setCurrentUser', null)
  }
}
