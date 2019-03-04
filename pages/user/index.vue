<template>
  <div>
    <section class="content">
      <div
        class="notification is-full"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolore fugit magnam accusantium praesentium velit.</div>
      <table class="table is-responsive">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ index }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.address.street }} - {{ user.address.suite }} - {{ user.address.city }}</td>
            <td>{{ user.phone}}</td>
            <td>{{ user.company.name}}</td>
            <td>
              <div class="icon-action">
                <nuxt-link :to="'/user/' + user.id">
                  <fa :icon="['fas', 'edit']"/>
                </nuxt-link>
                <fa @click="toggleModal" :icon="['fas', 'eraser']"/>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="modal" :class="{ 'is-active': isActive }">
        <div class="modal-background"  @click="toggleModal"></div>
        <div class="modal-content">
          <div class="box">
          Do you want to delete this user ? Not this time bro!
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="toggleModal"></button>
      </div>
    </section>
  </div>
</template>
<script>
import User from "@/models/User";

export default {
  middleware: "authenticated",
  data() {
    return {
      isActive: false
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("user/getListUsers");
  },
  computed: {
    users() {
      return User.query()
        .orderBy("id", "desc")
        .get();
    }
  },
  methods: {
    toggleModal() {
      this.isActive = !this.isActive
    }
  }
}; 
</script>

<style scoped>
.fa-edit,
.fa-eraser {
  cursor: pointer;
  color: black;
}
</style>
