import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
    },
    plugins: [
        createPersistedState()
    ],
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
            if (user) {
                state.isUserLoggedIn = true;
            }
            else {
                state.isUserLoggedIn = false;
            }
        },
    },
    actions: {
        setToken({ commit }, token) {
            commit("setToken", token);
        },
        setUser({ commit }, user) {
            commit("setUser", user);
        }
    }
});