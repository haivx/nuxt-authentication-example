import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import database from '../orm/database'

const initialState = () => ({
  auth: null,
  error: null
})
export const state = initialState

export const actions = {
  logOut({ commit }) {
    commit('LOGOUT')
  }
}

export const mutations = {
  RESET_STATE(state) {
    Object.assign(state, initialState);
  },
  SAVE_AUTH(state, user) {
    state.auth = user
  },
  LOGOUT(state) {
    state.auth = null
    this.$router.push('/')
  },
  LOGIN_FAIL(state, error) {
    state.error = error
  }
}

export const getters = {
  isLoggedIn(state) {
    return !!state.auth
  }
}

export const plugins = [ VuexORM.install(database) ]