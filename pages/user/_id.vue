<template>
  <div class="container">
    <div class="columns">
      <div class="column is-12">
        <div class="notification has-text-centered">
          <h3>User Information</h3>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" :value="user.name">
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Text input" :value="user.username">
            <span class="icon is-small is-left">
              <fa :icon="['fas', 'check']"/>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left">
            <input class="input" type="email" placeholder="Email input" :value="user.email">
            <span class="icon is-small is-right">
              <fa :icon="['fas', 'coins']"/>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Phone</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="" :value="user.phone">
            <span class="icon is-small is-right">
              <fa :icon="['fas', 'blender-phone']"/>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Address</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="" :value="user.phone">
            <span class="icon is-small is-right">
              <fa :icon="['fas', 'address-book']"/>
            </span>
          </div>
        </div>
        <div class="field has-text-centered">
          <a class="button is-link">Edit</a>
          <a class="button is-dark" href="/user">Go back</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import User from "@/models/User";
export default {
  middleware: 'authenticated',
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  async fetch({ store, params }) {
    await store.dispatch("user/getListUsers");
  },
  computed: {
    user() {
      const id = parseInt(this.$route.params.id, 10);
      return User.find(id);
    }
  }
};
</script>

<style>
  .notification h3 {
    font-size: 30px;
    font-weight: bolder
  }
</style>
