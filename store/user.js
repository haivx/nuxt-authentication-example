import axios from "axios";
import User from "@/models/User";

export const state = () => {

}

export const actions = {
  async getListUsers({ commit }) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("SAVE_LIST_USER", data);
  },
  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post("/api/login", {username, password})
      if (data.error) {
        commit("LOGIN_FAIL", data.error, { root: true });
        return;
      }

      const user = {
        username, 
        password,
        token: data.accessToken
      }
      commit("LOGIN_SUCCESS");
      commit("SAVE_AUTH", user, { root: true })
    }
    catch (error) {
      commit("LOGIN_FAIL", error, { root: true });
    }
  }
};

export const mutations = {
  SAVE_LIST_USER(state, responseData) {
    User.create({ data: responseData });
  },
  LOGIN_SUCCESS(state) {
    this.$router.push('/dashboard')
  },
};
