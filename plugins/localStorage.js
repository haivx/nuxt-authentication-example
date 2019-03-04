import createPersistedState from 'vuex-persistedstate'
 
export default ({store}) => {
  createPersistedState({
      key: 'nuxt',
      paths: ["auth"]
  })(store)
}