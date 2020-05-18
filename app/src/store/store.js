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
      state.votes = {
        ...state.votes,
        [id]: votes,
      };
    },
    addDislike(state, id) {
      const votes = state.votes[id] || { likes: 0, dislikes: 0 };
      votes.dislikes = votes.dislikes + 1;
      state.votes = {
        ...state.votes,
        [id]: votes,
      };
    },
    register(state, data) {
      state.user = { ...data.data };
    },
    login(state, data) {
      state.user = { ...data.data };
    },
    logout(state) {
      state.user = {};
      state.votes = {};
    },
    setUserVotes(state, data) {
      const votes = {};
      data.data.forEach(({ personId, voteType }) => {
        if (!votes[personId]) {
          votes[personId] = {
            likes: 0,
            dislikes: 0,
          };
        }

        const vote = votes[personId];
        const type = voteType === 'Like' ? 'likes' : 'dislikes';
        vote[type] = vote[type] + 1;
      });
      state.votes = votes;
    },
  },
  actions: {
    addLike(context, id) {
      axios
        .post(`${api}/vote`, { personId: id, voteType: 'Like', userId: this.state.user.id },
          { headers: { Authorization: this.state.user.token } })
        .then(() => {
          context.commit('addLike', id);
        })
        .catch(error => (console.log(error)));
    },
    addDislike(context, id) {
      axios
        .post(`${api}/vote`, { personId: id, voteType: 'Dislike', userId: this.state.user.id },
          { headers: { Authorization: this.state.user.token } })
        .then(() => {
          context.commit('addDislike', id);
        })
        .catch(error => (console.log(error)));
    },
    logout(context) {
      context.commit('logout');
    },
    login(context, dataLogin) {
      axios
        .post(`${api}/user/login`, dataLogin)
        .then(({ data }) => {
          context.commit('login', data);
          context.dispatch('getActualVotes');
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
    getActualVotes(context) {
      axios
        .get(`${api}/vote/user/${this.state.user.id}`, { headers: { Authorization: this.state.user.token } })
        .then(({ data }) => {
          context.commit('setUserVotes', data);
        })
        .catch(error => (console.log(error)));
    },
  }
});

store.subscribe((mutation, state) =>
  localStorage.setItem('state', JSON.stringify(state)));

export default store;