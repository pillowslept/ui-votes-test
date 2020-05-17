import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    votes: {},
  },
  getters: {
    getVotes(state) {
      return state.votes;
    }
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
  },
  actions: {
    addLike(context, id) {
      context.commit('addLike', id);
    },
    addDislike(context, id) {
      context.commit('addDislike', id);
    },
  }
});

store.subscribe((mutation, state) =>
  localStorage.setItem('state', JSON.stringify(state)));

export default store;