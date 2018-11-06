<template>
    <div class="ui secondary pointing menu">
    
        <router-link to="/" class="active item">
    
                Image Storage
    
        </router-link>
    
    
    
    
    
        <div class="right menu">
    
            
    
            <div class="horizontal" v-if="isLoggedIn">
                <!-- Use router-link to preventfullpage reload -->
                <router-link to="/"  class="item">Galleries</router-link>
                <router-link to="/upload"  class="item">Upload</router-link>
                <a  class="item" @click="logout">Logout</a>
                
    
            </div>
    
    
    
            <a v-else href="#" class="ui item" @click="login">
    
                   Login
    
               </a>
    
        </div>
    
    </div>
</template>

<script>
    import {
    
        mapActions,
    
        mapGetters
    
    } from 'vuex'; //Allow us to use actions from the vuex module in our component.
    
    
    
    export default {
    
        name: 'AppHeader',
    
        computed: mapGetters(['isLoggedIn']),
    
        methods: mapActions(['login', 'logout'])
    
        //Computed- get access to our data and render it in our template
    
        //the action methods go here in the form of an array which tkes the action name as a string
    
        //  methods: {
    
        //  ...mapActions(['login]) //This is done so we can add further methods to the object. As we only have one method we do it
    
        //  as above  
    
        //}
    
    }
</script>

<style scoped>
   .horizontal {
       display: flex;
   } 
</style>
