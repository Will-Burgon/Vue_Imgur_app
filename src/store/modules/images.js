import api from '../../api/imgur'

const state = {
    images : []
};

const getters = {
    allImages: state => state.images
};

const actions = {
  async fetchImages({ rootState, commit }) { //Call to all the state in the Vuex instance
     const{ token } = rootState.auth //we wired up the auth module to our vuex instance so we can access state from the auth module by calling rootState.auth.token.
                            //using ES2015 we can use destructuring to clean up the code
      const response = await api.fetchImages(token);
      commit('setImages', response.data.data) //calling the commmit funciton the first argument is a string - the mutation function and the
                                              //the 2nd is the data
      
    }
};

const mutations = {
    setImages: (state, images) => {state.images = images;}
}

export default { //make sure we export these properties
    state,
    getters,
    actions,
    mutations
}