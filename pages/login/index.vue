<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Welcome back!</h2>
          <p class="help is-danger" v-if="error">{{ error }}</p>
          <form method="post" @submit.prevent="handlelogin">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="username"
                  v-model="username"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                  required
                >
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Login</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Haven't got an account? <nuxt-link to="/">Go back</nuxt-link>
            <p class="help is-success">Or you can login by default account: admin/123</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    handlelogin() {
      this.$store.dispatch("user/login", {
        username: this.username,
        password: this.password
      })
    }
  },
  computed: {
    error() {
      return this.$store.state.error
    }
  }
}
</script>
