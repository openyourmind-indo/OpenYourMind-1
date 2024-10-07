import Vue from 'vue';
import Vuex from 'vuex';
import { register, login, logout, getCurrentUser } from './authService';

Vue.use(Vuex);

const user = getCurrentUser();

const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const store = new Vuex.Store({
    state: initialState,
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        }
    },
    actions: {
        async login({ commit }, user) {
            try {
                const userData = await login(user);
                commit('loginSuccess', userData);
                return Promise.resolve(userData);
            } catch (error) {
                commit('loginFailure');
                return Promise.reject(error);
            }
        },
        logout({ commit }) {
            logout();
            commit('logout');
        },
        async register({ commit }, user) {
            try {
                const response = await register(user);
                return Promise.resolve(response);
            } catch (error) {
                return Promise.reject(error);
            }
        }
    },
    getters: {
        isLoggedIn: state => !!state.user,
        currentUser: state => state.user,
        currentRole: state => state.user ? state.user.role : null
    }
});
