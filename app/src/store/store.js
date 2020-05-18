import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const api = 'http://localhost:3000/api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {},
    votes: {},
  },
  getters: {
    getVotes(state) {
      return state.votes;
    },
    isLogged(state) {
      return !!state.user.token && !!state.user.email;
    },
  },
  mutations: {
    syncState(state) {
      if (localStorage.state) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('state')))
        );
      }
    },
    addLike(state, id) {
      const votes = state.votes[id] || { likes: 0, dislikes: 0 };
      votes.likes = votes.likes + 1;
      state.votes[id] = votes;
    },
    addDislike(state, id) {
      const votes = state.votes[id] || { likes: 0, dislikes: 0 };
      votes.dislikes = votes.dislikes + 1;
      state.votes[id] = votes;
    },
    register(state, data) {
      state.user = { ...data.data };
    },
    login(state, data) {
      state.user = { ...data.data };
    },
    logout(state) {
      state.user = {};
    },
  },
  actions: {
    addLike(context, id) {
      context.commit('addLike', id);
    },
    addDislike(context, id) {
      context.commit('addDislike', id);
    },
    logout(context) {
      context.commit('logout');
    },
    login(context, dataLogin) {
      axios
        .post(`${api}/user/login`, dataLogin)
        .then(({ data }) => {
          context.commit('login', data);
        })
        .catch(error => (console.log(error)));
    },
    register(context, dataRegister) {
      axios
        .post(`${api}/user`, dataRegister)
        .then(({ data }) => {
          context.commit('register', data);
        })
        .catch(error => (console.log(error)));
    },
  }
});

store.subscribe((mutation, state) =>
  localStorage.setItem('state', JSON.stringify(state)));

export default store;