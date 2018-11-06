import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main'

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: (state) => !!state.token
    //!! turns a statement into a boolean therefore if it is !!null then it is false. If it is !!9ifejff94tu49u then it is true.

};

//Getters get data, Actions change data

const actions = {
    
    login: () => {
        api.login()
    },

    finalizeLogin: ({commit}, hash) => {
     const query = qs.parse(hash.replace('#', '')) //replace the hash with an empty string
     commit('setToken', query.access_token);
     window.localStorage.setItem('imgur_token', query.access_token);
     router.push('/')

    },
    
    logout: ({ commit }) => {   //In order to access the mutations object we have to use an object as the parameter in our function and pass it a function called commit
        commit('setToken', null) //1st argument is the function in mutations and the 2nd is the value we want to pass into it.
        window.localStorage.removeItem('imgur_token')
    }

    
}

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

