import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App';
import store from './store' //Webpack will know that we're looking for index.js.
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter); //Handshake between Vue and Vue Router

export const router = new VueRouter({ //exporting it means we can access it and not force a page reload when we need to redirect a user
     mode: 'history', //use browser router
     routes: [
        { path: '/oauth2/callback', component: AuthHandler },
        {path: '/', component: ImageList},
        {path: '/upload', component: UploadForm}
     ]
 });

 //Creating Our Vue Instance 
 
new Vue({
    router,
    store, //adding the store to the new Vue instance.
    render: h => h(App)
}).$mount('#app')

/* VUEX MODULES OVERVIEW
4 distinct parts of the module:

1. State - where the data is held
2. Getters - Functions to access the data - filter/sort, boolean etc from VUEX modules
3. Mutations - Changing the data
4. Actions - functions that call multiple mutations or a single mutations in a particular order and at a particular time .




*/